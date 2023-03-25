import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

export const AreaChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Area chart",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {},
      tooltip: {
        trigger: "axis",
      },
      series: [
        {
          name: "Series 1",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {},
        },
      ],
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
