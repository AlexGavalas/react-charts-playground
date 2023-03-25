import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

export const ScatterChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Scatter chart",
      },
      xAxis: {},
      yAxis: {},
      series: [
        {
          name: "Series 1",
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
          ],
          type: "scatter",
        },
      ],
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
