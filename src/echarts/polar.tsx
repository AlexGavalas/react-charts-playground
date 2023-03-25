import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

export const PolarChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Polar chart",
      },
      angleAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      radiusAxis: {},
      polar: {
        radius: "65%",
      },
      series: [
        {
          type: "bar",
          data: [1, 2, 3, 4, 3, 5, 1],
          coordinateSystem: "polar",
          name: "A",
          stack: "a",
          emphasis: {
            focus: "series",
          },
        },
        {
          type: "bar",
          data: [2, 4, 6, 1, 3, 2, 1],
          coordinateSystem: "polar",
          name: "B",
          stack: "a",
          emphasis: {
            focus: "series",
          },
        },
        {
          type: "bar",
          data: [1, 2, 3, 4, 1, 2, 5],
          coordinateSystem: "polar",
          name: "C",
          stack: "a",
          emphasis: {
            focus: "series",
          },
        },
      ],
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
