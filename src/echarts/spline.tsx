import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

export const SplineChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Line chart",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        trigger: "axis",
      },
      series: [
        {
          name: "Series 1",
          data: [150, 230, 224, 218, 135, 147, 260],
          smooth: true,
          type: "line",
        },
      ],
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
