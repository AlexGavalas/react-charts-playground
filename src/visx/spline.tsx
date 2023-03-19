import { extent, max } from "d3-array";
import * as allCurves from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";
import { MarkerArrow, MarkerX, MarkerCircle } from "@visx/marker";
import generateDateValue, {
  DateValue,
} from "@visx/mock-data/lib/generators/genDateValue";
import { useElementSize } from "../helpers";

const lineCount = 3;
const series = new Array(lineCount).fill(null).map((_, i) =>
  // vary each series value deterministically
  generateDateValue(25, i / 72).sort(
    (a: DateValue, b: DateValue) => a.date.getTime() - b.date.getTime()
  )
);

const allData = series.reduce((rec, d) => rec.concat(d), []);

// data accessors
const getX = (d: DateValue) => d.date;
const getY = (d: DateValue) => d.value;

const xScale = scaleTime<number>({
  domain: extent(allData, getX) as [Date, Date],
});

const yScale = scaleLinear<number>({
  domain: [0, max(allData, getY) as number],
});

export const SplineChart = () => {
  const { ref, width, height } = useElementSize<HTMLDivElement>();

  const verticalPadding = 20;
  const horizontalPadding = 20;
  const groupGap = 10;

  const verticalSpace = 2 * horizontalPadding + (lineCount - 1) * groupGap;
  const svgHeight = height - verticalSpace;
  const lineHeight = svgHeight / lineCount;

  xScale.range([0, width - verticalPadding * 2]);
  yScale.range([lineHeight, 0]);

  return (
    <div ref={ref} className="chart-container">
      {height > 0 && (
        <svg width={width} height={height}>
          <rect width={width} height={height} fill="#efefef" />
          <MarkerX
            id="marker-x"
            stroke="#333"
            size={22}
            strokeWidth={4}
            markerUnits="userSpaceOnUse"
          />
          <MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />
          <MarkerArrow id="marker-arrow" fill="#333" refX={2} size={6} />
          {series.map((lineData, i) => {
            const even = i % 2 === 0;

            const evenOptions = {
              strokeWidth: 2,
              strokeOpacity: 1,
              markerMid: "url(#marker-circle)",
              markerStart: "url(#marker-x)",
              markerEnd: "url(#marker-arrow)",
            };

            return (
              <Group
                key={`lines-${i}`}
                top={i * (lineHeight + groupGap) + horizontalPadding}
                left={verticalPadding}
              >
                {even &&
                  lineData.map((d, j) => (
                    <circle
                      key={i + j}
                      r={5}
                      cx={xScale(getX(d))}
                      cy={yScale(getY(d))}
                      stroke="rgba(33,33,33,0.5)"
                      fill="transparent"
                    />
                  ))}
                <LinePath<DateValue>
                  curve={allCurves.curveNatural}
                  data={lineData}
                  x={(d) => xScale(getX(d)) ?? 0}
                  y={(d) => yScale(getY(d)) ?? 0}
                  stroke="#333"
                  strokeWidth={0.7}
                  {...(even && evenOptions)}
                />
              </Group>
            );
          })}
        </svg>
      )}
    </div>
  );
};
