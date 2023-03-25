import { ReactECharts } from "./chart";
import { mergeWithDefault } from "./helpers";

const data = [
  {
    name: "Grandpa",
    children: [
      {
        name: "Uncle Leo",
        value: 15,
        children: [
          {
            name: "Cousin Jack",
            value: 2,
          },
          {
            name: "Cousin Mary",
            value: 5,
          },
          {
            name: "Cousin Ben",
            value: 4,
          },
        ],
      },
      {
        name: "Father",
        value: 10,
        children: [
          {
            name: "Me",
            value: 5,
          },
          {
            name: "Brother Peter",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Nancy",
    children: [
      {
        name: "Uncle Nike",
        children: [
          {
            name: "Cousin Betty",
            value: 1,
          },
          {
            name: "Cousin Jenny",
            value: 2,
          },
        ],
      },
    ],
  },
];

export const SunburstChart = () => {
  const { option, settings } = mergeWithDefault({
    option: {
      title: {
        text: "Sunburst chart",
      },
      legend: {
        show: false,
      },
      series: {
        type: "sunburst",
        data,
        radius: ["10%", "90%"],
        center: ["50%", "55%"],
        label: {
          rotate: "tangential",
        },
        emphasis: {
          focus: "ancestor",
        },
      },
    },
  });

  return <ReactECharts option={option} settings={settings} />;
};
