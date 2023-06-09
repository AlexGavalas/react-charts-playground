import { BarGroupHorizontal, Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { AxisLeft } from "@visx/axis";
import cityTemperature, {
  CityTemperature,
} from "@visx/mock-data/lib/mocks/cityTemperature";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { timeParse, timeFormat } from "d3-time-format";
import { withSize } from "./responsive-wrapper";

type CityName = "New York" | "San Francisco" | "Austin";

const blue = "#aeeef8";
const green = "#e5fd3d";
const purple = "#9caff6";
const background = "#612efb";

const parseDate = timeParse("%Y-%m-%d");
const format = timeFormat("%b %d");
const formatDate = (date: string) => format(parseDate(date) as Date);
function max<D>(arr: D[], fn: (d: D) => number) {
  return Math.max(...arr.map(fn));
}

const data = cityTemperature.slice(0, 4);
const keys = Object.keys(data[0]).filter((d) => d !== "date") as CityName[];

// accessors
const getDate = (d: CityTemperature) => d.date;

// scales
const dateScale = scaleBand({
  domain: data.map(getDate),
  padding: 0.2,
});

const cityScale = scaleBand({
  domain: keys,
  padding: 0.1,
});

const tempScale = scaleLinear<number>({
  domain: [0, max(data, (d) => max(keys, (key) => Number(d[key])))],
});

const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [blue, green, purple],
});

export const BarChart = withSize(({ height, width }) => {
  const events = false;
  const margin = { top: 20, right: 20, bottom: 20, left: 50 };

  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  dateScale.rangeRound([0, yMax]);
  cityScale.rangeRound([0, dateScale.bandwidth()]);
  tempScale.rangeRound([0, xMax]);

  const RADIUS = 5;

  if (!height) return null;

  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill={background} rx={RADIUS} />
      <Group top={margin.top} left={margin.left}>
        <BarGroupHorizontal
          data={data}
          keys={keys}
          width={xMax}
          y0={getDate}
          y0Scale={dateScale}
          y1Scale={cityScale}
          xScale={tempScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group
                key={`bar-group-horizontal-${barGroup.index}-${barGroup.y0}`}
                top={barGroup.y0}
              >
                {barGroup.bars.map((bar) => (
                  <Bar
                    key={`${barGroup.index}-${bar.index}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    rx={4}
                    onClick={() => {
                      if (events)
                        alert(
                          `${bar.key} (${bar.value}) - ${JSON.stringify(bar)}`
                        );
                    }}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroupHorizontal>
        <AxisLeft
          scale={dateScale}
          stroke={green}
          tickStroke={green}
          tickFormat={formatDate}
          hideAxisLine
          tickLabelProps={{
            fill: green,
            fontSize: 11,
            textAnchor: "end",
            dy: "0.33em",
          }}
        />
      </Group>
    </svg>
  );
});
