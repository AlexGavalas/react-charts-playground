import { useState, useMemo } from "react";
import AreaClosed from "@visx/shape/lib/shapes/AreaClosed";
import { curveMonotoneX } from "@visx/curve";
import {
  scaleUtc,
  scaleLinear,
  scaleLog,
  scaleBand,
  ScaleInput,
  coerceNumber,
} from "@visx/scale";
import { Axis, Orientation, SharedAxisProps, AxisScale } from "@visx/axis";
import { GridRows, GridColumns } from "@visx/grid";
import {
  AnimatedAxis,
  AnimatedGridRows,
  AnimatedGridColumns,
} from "@visx/react-spring";
import { getSeededRandom } from "@visx/mock-data";
import { LinearGradient } from "@visx/gradient";
import { GridRowsProps } from "@visx/grid/lib/grids/GridRows";
import { GridColumnsProps } from "@visx/grid/lib/grids/GridColumns";
import { timeFormat } from "d3-time-format";
import { withSize } from "./responsive-wrapper";

const backgroundColor = "#da7cff";
const axisColor = "#fff";
const tickLabelColor = "#fff";
const labelColor = "#340098";
const gridColor = "#6e0fca";
const seededRandom = getSeededRandom(0.5);
const margin = {
  top: 40,
  right: 150,
  bottom: 20,
  left: 50,
};

const tickLabelProps = {
  fill: tickLabelColor,
  fontSize: 12,
  fontFamily: "sans-serif",
  textAnchor: "middle",
} as const;

const getMinMax = (vals: (number | { valueOf(): number })[]) => {
  const numericVals = vals.map(coerceNumber);
  return [Math.min(...numericVals), Math.max(...numericVals)];
};

type AnimationTrajectory = "outside" | "center" | "min" | "max" | undefined;

type AxisComponentType = React.FC<
  SharedAxisProps<AxisScale> & {
    animationTrajectory: AnimationTrajectory;
  }
>;

type GridRowsComponentType = React.FC<
  GridRowsProps<AxisScale> & {
    animationTrajectory: AnimationTrajectory;
  }
>;

type GridColumnsComponentType = React.FC<
  GridColumnsProps<AxisScale> & {
    animationTrajectory: AnimationTrajectory;
  }
>;

interface AxisDemoProps<Scale extends AxisScale>
  extends SharedAxisProps<Scale> {
  values: ScaleInput<Scale>[];
}

export const Scales = withSize(({ width: outerWidth, height: outerHeight }) => {
  // use non-animated components if prefers-reduced-motion is set
  const prefersReducedMotionQuery =
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)");

  const prefersReducedMotion =
    !prefersReducedMotionQuery || !!prefersReducedMotionQuery.matches;

  const [useAnimatedComponents, setUseAnimatedComponents] = useState(
    !prefersReducedMotion
  );

  // in svg, margin is subtracted from total width/height
  const width = outerWidth - margin.left - margin.right;
  const height = outerHeight - margin.top - margin.bottom;

  const AxisComponent: AxisComponentType = useAnimatedComponents
    ? AnimatedAxis
    : Axis;

  const GridRowsComponent: GridRowsComponentType = useAnimatedComponents
    ? AnimatedGridRows
    : GridRows;

  const GridColumnsComponent: GridColumnsComponentType = useAnimatedComponents
    ? AnimatedGridColumns
    : GridColumns;

  const axes: AxisDemoProps<AxisScale<number>>[] = useMemo(() => {
    // toggle between two value ranges to demo animation
    const linearValues = [0, 2, 4, 6, 8, 10];
    const bandValues = ["a", "b", "c", "d"];
    const timeValues = [new Date("2020-01-01"), new Date("2020-02-01")];
    const logValues = [1, 10, 100, 1000, 10000];

    return [
      {
        scale: scaleLinear({
          domain: getMinMax(linearValues),
          range: [0, width],
        }),
        values: linearValues,
        tickFormat: (
          v: number,
          index: number,
          ticks: { value: number; index: number }[]
        ) =>
          index === 0
            ? "first"
            : index === ticks[ticks.length - 1].index
            ? "last"
            : `${v}`,
        label: "linear",
      },
      {
        scale: scaleBand({
          domain: bandValues,
          range: [0, width],
          paddingOuter: 0,
          paddingInner: 1,
        }),
        values: bandValues,
        tickFormat: (v: string) => v,
        label: "categories",
      },
      {
        scale: scaleUtc({
          domain: getMinMax(timeValues),
          range: [0, width],
        }),
        values: timeValues,
        tickFormat: (v: Date, i: number) =>
          i === 3
            ? "🎉"
            : width > 400 || i % 2 === 0
            ? timeFormat("%b %d")(v)
            : "",
        label: "time",
      },
      {
        scale: scaleLog({
          domain: getMinMax(logValues),
          range: [0, width],
        }),
        values: logValues,
        tickFormat: (v: number) => {
          const asString = `${v}`;
          // label only major ticks
          return asString.match(/^[.01?[\]]*$/) ? asString : "";
        },
        label: "log",
      },
    ];
  }, [width]);

  const scalePadding = 40;
  const scaleHeight = height / axes.length - scalePadding;

  const yScale = scaleLinear({
    domain: [100, 0],
    range: [scaleHeight, 0],
  });

  if (outerHeight <= 0) return null;

  return (
    <svg width={outerWidth} height={outerHeight}>
      <LinearGradient
        id="visx-axis-gradient"
        from={backgroundColor}
        to={backgroundColor}
        toOpacity={0.5}
      />
      <rect
        x={0}
        y={0}
        width={outerWidth}
        height={outerHeight}
        fill={"url(#visx-axis-gradient)"}
      />
      <g transform={`translate(${margin.left},${margin.top})`}>
        {axes.map(({ scale, values, label, tickFormat }, i) => (
          <g
            key={`scale-${i}`}
            transform={`translate(0, ${i * (scaleHeight + scalePadding)})`}
          >
            <GridRowsComponent
              scale={yScale}
              stroke={gridColor}
              width={width}
              numTicks={1}
              animationTrajectory="center"
            />
            <GridColumnsComponent
              scale={scale}
              stroke={gridColor}
              height={scaleHeight}
              numTicks={5}
              animationTrajectory="center"
            />
            <AreaClosed
              data={values.map((x) => [
                (scale(x) ?? 0) +
                  // offset point half of band width for band scales
                  ("bandwidth" in scale &&
                  typeof scale!.bandwidth !== "undefined"
                    ? scale.bandwidth!() / 2
                    : 0),
                yScale(10 + seededRandom() * 90),
              ])}
              yScale={yScale}
              curve={curveMonotoneX}
              fill={gridColor}
              fillOpacity={0.2}
            />
            <AxisComponent
              orientation={Orientation.bottom}
              top={scaleHeight}
              scale={scale}
              tickFormat={tickFormat}
              stroke={axisColor}
              tickStroke={axisColor}
              tickLabelProps={tickLabelProps}
              tickValues={
                label === "log" || label === "time" ? undefined : values
              }
              numTicks={label === "time" ? 6 : undefined}
              label={label}
              labelProps={{
                x: width + 20,
                y: 0,
                fill: labelColor,
              }}
              animationTrajectory="center"
            />
          </g>
        ))}
      </g>
    </svg>
  );
});
