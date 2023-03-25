import Chart, { Props } from "react-apexcharts";

import { useElementSize } from "../helpers";
import { APEX_CHART_PADDING } from "./constants";
import { mergeWithDefault } from "./helpers";

export const ScatterChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const props: Props = mergeWithDefault({
    options: {
      title: {
        text: "Scatter chart",
      },
      chart: {
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
    },
    series: [
      {
        name: "a",
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [13.6, 3.2],
          [10.9, 7.4],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
        ],
      },
      {
        name: "b",
        data: [
          [36.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
          [3.6, 12.2],
          [1.9, 14.4],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
        ],
      },
      {
        name: "c",
        data: [
          [21.7, 3],
          [23.6, 3.5],
          [24.6, 3],
          [29.9, 3],
          [21.7, 20],
          [23, 2],
          [10.9, 3],
          [28, 4],
          [27.1, 0.3],
          [16.4, 4],
        ],
      },
    ],
  });

  return (
    <div className="chart-container" ref={ref}>
      <Chart
        options={props.options}
        series={props.series}
        type="scatter"
        width={width - APEX_CHART_PADDING}
        height={height - APEX_CHART_PADDING}
      />
    </div>
  );
};
