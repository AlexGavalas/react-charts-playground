import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

export const BarChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Bar chart",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {},
      yAxis: {
        type: "category",
        data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
      },
      series: [
        {
          name: "2011",
          type: "bar",
          data: [18203, 23489, 29034, 104970, 131744, 630230],
        },
        {
          name: "2012",
          type: "bar",
          data: [19325, 23438, 31000, 121594, 134141, 681807],
        },
      ],
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
