import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

export const ColumnChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Column chart",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {},
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      series: [
        {
          name: "Series 1",
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
