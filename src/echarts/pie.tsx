import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

export const PieChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Pie chart",
      },
      series: {
        name: "Access From",
        type: "pie",
        height: "90%",
        top: "5%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
