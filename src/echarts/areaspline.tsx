import { ReactECharts, ReactEChartsProps } from "./chart";

const option: ReactEChartsProps["option"] = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
      areaStyle: {},
    },
  ],
};

export const AreaSplineChart = () => {
  return <ReactECharts option={option} />;
};