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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

export const ColumnChart = () => {
  return <ReactECharts option={option} />;
};
