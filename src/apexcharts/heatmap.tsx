import Chart, { Props } from "react-apexcharts";

import { useElementSize } from "../helpers";
import { APEX_CHART_PADDING } from "./constants";
import { mergeWithDefault } from "./helpers";

export const HeatmapChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const props: Props = mergeWithDefault({
    options: {
      title: {
        text: "Heatmap chart",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [
          {
            x: "W1",
            y: 22,
          },
          {
            x: "W2",
            y: 29,
          },
          {
            x: "W3",
            y: 13,
          },
          {
            x: "W4",
            y: 32,
          },
        ],
      },
      {
        name: "Series 2",
        data: [
          {
            x: "W1",
            y: 43,
          },
          {
            x: "W2",
            y: 43,
          },
          {
            x: "W3",
            y: 43,
          },
          {
            x: "W4",
            y: 43,
          },
        ],
      },
    ],
  });

  return (
    <div className="chart-container" ref={ref}>
      <Chart
        options={props.options}
        series={props.series}
        type="heatmap"
        width={width - APEX_CHART_PADDING}
        height={height - APEX_CHART_PADDING}
      />
    </div>
  );
};
