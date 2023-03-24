import { ReactECharts, ReactEChartsProps } from "./chart";

const option: ReactEChartsProps["option"] = {
  tooltip: {},
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      label: {},
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

export const DonutChart = () => {
  return <ReactECharts option={option} />;
};
