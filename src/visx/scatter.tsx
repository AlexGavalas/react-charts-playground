import { useMemo, useCallback, useRef } from "react";
import { Group } from "@visx/group";
import { Circle } from "@visx/shape";
import { GradientPinkRed } from "@visx/gradient";
import { scaleLinear } from "@visx/scale";
import genRandomNormalPoints, {
  PointsRange,
} from "@visx/mock-data/lib/generators/genRandomNormalPoints";
import { withTooltip, Tooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { voronoi, VoronoiPolygon } from "@visx/voronoi";
import { localPoint } from "@visx/event";
import { useElementSize } from "../helpers";

const points: PointsRange[] = genRandomNormalPoints(600, 0.5).filter(
  (_, i) => i < 600
);

const x = (d: PointsRange) => d[0];
const y = (d: PointsRange) => d[1];

export const ScatterChart = withTooltip<{}, PointsRange>(
  ({
    hideTooltip,
    showTooltip,
    tooltipOpen,
    tooltipData,
    tooltipLeft,
    tooltipTop,
  }: WithTooltipProvidedProps<PointsRange>) => {
    const { ref, width, height } = useElementSize<HTMLDivElement>();
    const svgRef = useRef<SVGSVGElement>(null);
    const tooltipTimeout = useRef<number>();

    const xScale = useMemo(
      () =>
        scaleLinear<number>({
          domain: [1.3, 2.2],
          range: [0, width],
          clamp: true,
        }),
      [width]
    );

    const yScale = useMemo(
      () =>
        scaleLinear<number>({
          domain: [0.75, 1.6],
          range: [height, 0],
          clamp: true,
        }),
      [height]
    );

    const voronoiLayout = useMemo(
      () =>
        voronoi<PointsRange>({
          x: (d) => xScale(x(d)) ?? 0,
          y: (d) => yScale(y(d)) ?? 0,
          width,
          height,
        })(points),
      [width, height, xScale, yScale]
    );

    const handleMouseMove = useCallback(
      (event: React.MouseEvent | React.TouchEvent) => {
        if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
        if (!svgRef.current) return;

        // find the nearest polygon to the current mouse position
        const point = localPoint(svgRef.current, event);

        if (!point) return;

        const neighborRadius = 100;
        const closest = voronoiLayout.find(point.x, point.y, neighborRadius);

        if (closest) {
          showTooltip({
            tooltipLeft: xScale(x(closest.data)),
            tooltipTop: yScale(y(closest.data)),
            tooltipData: closest.data,
          });
        }
      },
      [xScale, yScale, showTooltip, voronoiLayout]
    );

    const handleMouseLeave = useCallback(() => {
      tooltipTimeout.current = window.setTimeout(() => {
        hideTooltip();
      }, 300);
    }, [hideTooltip]);

    return (
      <div ref={ref} className="chart-container">
        {width > 0 && (
          <svg width={width} height={height} ref={svgRef}>
            <GradientPinkRed id="dots-pink" />
            <rect
              width={width}
              height={height}
              fill="url(#dots-pink)"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseLeave}
            />
            <Group pointerEvents="none">
              {points.map((point, i) => (
                <Circle
                  key={`point-${point[0]}-${i}`}
                  className="dot"
                  cx={xScale(x(point))}
                  cy={yScale(y(point))}
                  r={i % 3 === 0 ? 2 : 3}
                  fill={tooltipData === point ? "white" : "#f6c431"}
                />
              ))}
            </Group>
          </svg>
        )}
        {tooltipOpen &&
          tooltipData &&
          tooltipLeft != null &&
          tooltipTop != null && (
            <Tooltip left={tooltipLeft + 10} top={tooltipTop + 10}>
              <div>
                <strong>x:</strong> {x(tooltipData)}
              </div>
              <div>
                <strong>y:</strong> {y(tooltipData)}
              </div>
            </Tooltip>
          )}
      </div>
    );
  }
);
