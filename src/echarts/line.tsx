import { ReactECharts, ReactEChartsProps } from "./chart";

const option: ReactEChartsProps["option"] = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

export const LineChart = () => {
  return <ReactECharts option={option} />;
};
