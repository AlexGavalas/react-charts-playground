import { useMemo, useCallback, TouchEvent, MouseEvent, SVGProps } from "react";
import { AreaClosed, Line, Bar } from "@visx/shape";
import appleStock, { AppleStock } from "@visx/mock-data/lib/mocks/appleStock";
import { curveMonotoneX } from "@visx/curve";
import { GridRows, GridColumns } from "@visx/grid";
import { scaleTime, scaleLinear } from "@visx/scale";
import { withTooltip, TooltipWithBounds, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { localPoint } from "@visx/event";
import { LinearGradient } from "@visx/gradient";
import { max, extent, bisector } from "d3-array";
import { timeFormat } from "d3-time-format";
import { SizeProps, withSize } from "./responsive-wrapper";

type TooltipData = AppleStock;

const stock = appleStock.slice(800);

const background = "#3b6978";
const background2 = "#204051";
const accentColor = "#edffea";
const accentColorDark = "#75daad";

const tooltipStyles = {
  ...defaultStyles,
  background,
  border: "1px solid white",
  color: "white",
};

const formatDate = timeFormat("%b %d, '%y");

// data accessors
const getDate = (d: AppleStock) => new Date(d.date);
const getStockValue = (d: AppleStock) => d.close;
const bisectDate = bisector<AppleStock, Date>((d) => new Date(d.date)).left;

type AreaProps = SizeProps & {};

const Rect = (props: SVGProps<SVGRectElement>) => (
  <rect {...props} fill="url(#area-background-gradient)" />
);

export const AreaChart = withSize(
  withTooltip<AreaProps, TooltipData>(
    ({
      showTooltip,
      hideTooltip,
      tooltipData,
      tooltipTop = 0,
      tooltipLeft = 0,
      width,
      height,
    }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
      const margin = { top: 0, right: 0, bottom: 0, left: 0 };

      // bounds
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const dateScale = useMemo(
        () =>
          scaleTime({
            range: [margin.left, innerWidth + margin.left],
            domain: extent(stock, getDate) as [Date, Date],
          }),
        [innerWidth, margin.left]
      );

      const stockValueScale = useMemo(
        () =>
          scaleLinear({
            range: [innerHeight + margin.top, margin.top],
            domain: [0, (max(stock, getStockValue) || 0) + innerHeight / 3],
            nice: true,
          }),
        [margin.top, innerHeight]
      );

      const handleTooltip = useCallback(
        (event: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>) => {
          const { x } = localPoint(event) || { x: 0 };
          const x0 = dateScale.invert(x);
          const index = bisectDate(stock, x0, 1);
          const d0 = stock[index - 1];
          const d1 = stock[index];
          let d = d0;

          if (d1 && getDate(d1)) {
            d =
              x0.valueOf() - getDate(d0).valueOf() >
              getDate(d1).valueOf() - x0.valueOf()
                ? d1
                : d0;
          }

          showTooltip({
            tooltipData: d,
            tooltipLeft: x,
            tooltipTop: stockValueScale(getStockValue(d)),
          });
        },
        [showTooltip, stockValueScale, dateScale]
      );

      const BORDER_RADIUS = 5;

      return (
        <>
          <svg width={width} height={height} clipPath="url(#myClipPath)">
            <defs>
              <clipPath id="myClipPath">
                <Rect rx={BORDER_RADIUS} width={width} height={height} />
              </clipPath>
            </defs>
            <Rect rx={BORDER_RADIUS} width={width} height={height} />
            <LinearGradient
              id="area-background-gradient"
              from={background}
              to={background2}
            />
            <LinearGradient
              id="area-gradient"
              from={accentColor}
              to={accentColor}
              toOpacity={0.1}
            />
            <GridRows
              left={margin.left}
              scale={stockValueScale}
              width={innerWidth}
              strokeDasharray="1,3"
              stroke={accentColor}
              strokeOpacity={0}
              pointerEvents="none"
            />
            <GridColumns
              top={margin.top}
              scale={dateScale}
              height={innerHeight}
              strokeDasharray="1,3"
              stroke={accentColor}
              strokeOpacity={0.2}
              pointerEvents="none"
            />
            <AreaClosed<AppleStock>
              data={stock}
              x={(d) => dateScale(getDate(d)) ?? 0}
              y={(d) => stockValueScale(getStockValue(d)) ?? 0}
              yScale={stockValueScale}
              strokeWidth={1}
              stroke="url(#area-gradient)"
              fill="url(#area-gradient)"
              curve={curveMonotoneX}
            />
            <Bar
              x={margin.left}
              y={margin.top}
              width={innerWidth}
              height={innerHeight}
              fill="transparent"
              onTouchStart={handleTooltip}
              onTouchMove={handleTooltip}
              onMouseMove={handleTooltip}
              onMouseLeave={() => hideTooltip()}
            />
            {tooltipData && (
              <g>
                <Line
                  from={{ x: tooltipLeft, y: margin.top }}
                  to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                  stroke={accentColorDark}
                  strokeWidth={2}
                  pointerEvents="none"
                  strokeDasharray="5,2"
                />
                <circle
                  cx={tooltipLeft}
                  cy={tooltipTop + 1}
                  r={4}
                  fill="black"
                  fillOpacity={0.1}
                  stroke="black"
                  strokeOpacity={0.1}
                  strokeWidth={2}
                  pointerEvents="none"
                />
                <circle
                  cx={tooltipLeft}
                  cy={tooltipTop}
                  r={4}
                  fill={accentColorDark}
                  stroke="white"
                  strokeWidth={2}
                  pointerEvents="none"
                />
              </g>
            )}
          </svg>
          {tooltipData && (
            <TooltipWithBounds
              top={tooltipTop}
              left={tooltipLeft}
              style={tooltipStyles}
            >
              {`$${getStockValue(tooltipData)}`}
              <br />
              {formatDate(getDate(tooltipData))}
            </TooltipWithBounds>
          )}
        </>
      );
    }
  )
);
