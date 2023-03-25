import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SunburstModule from "highcharts/modules/sunburst";

import { mergeWithDefault } from "./helpers";
import { useElementSize } from "../helpers";

SunburstModule(Highcharts);

const data = [
  {
    id: "0.0",
    parent: "",
    name: "The World",
  },
  {
    id: "1.3",
    parent: "0.0",
    name: "Asia",
  },
  {
    id: "1.1",
    parent: "0.0",
    name: "Africa",
  },
  {
    id: "1.2",
    parent: "0.0",
    name: "America",
  },
  {
    id: "1.4",
    parent: "0.0",
    name: "Europe",
  },
  {
    id: "1.5",
    parent: "0.0",
    name: "Oceanic",
  },
  {
    id: "2.1",
    parent: "1.1",
    name: "Eastern Africa",
  },
  {
    id: "2.5",
    parent: "1.1",
    name: "Western Africa",
  },
  {
    id: "2.3",
    parent: "1.1",
    name: "North Africa",
  },
  {
    id: "2.2",
    parent: "1.1",
    name: "Central Africa",
  },
  {
    id: "2.4",
    parent: "1.1",
    name: "South America",
  },
  {
    id: "3.40",
    parent: "2.4",
    name: "Lesotho",
    value: 2233339,
  },
  {
    id: "2.9",
    parent: "1.2",
    name: "South America",
  },
  {
    id: "3.111",
    parent: "2.9",
    name: "Falkland Islands",
    value: 2910,
  },
  {
    id: "2.8",
    parent: "1.2",
    name: "Northern America",
  },
  {
    id: "3.93",
    parent: "2.8",
    name: "United States",
    value: 324459463,
  },
  {
    id: "3.94",
    parent: "2.8",
    name: "Canada",
    value: 36624199,
  },
  {
    id: "2.7",
    parent: "1.2",
    name: "Central America",
  },
  {
    id: "3.85",
    parent: "2.7",
    name: "Mexico",
    value: 129163276,
  },
  {
    id: "2.6",
    parent: "1.2",
    name: "Caribbean",
  },
  {
    id: "3.59",
    parent: "2.6",
    name: "Cuba",
    value: 11484636,
  },
  {
    id: "3.60",
    parent: "2.6",
    name: "Haiti",
    value: 10981229,
  },
  {
    id: "2.13",
    parent: "1.3",
    name: "Southern Asia",
  },
  {
    id: "3.136",
    parent: "2.13",
    name: "India",
    value: 139180127,
  },
  {
    id: "3.137",
    parent: "2.13",
    name: "Pakistan",
    value: 197015955,
  },
  {
    id: "3.138",
    parent: "2.13",
    name: "Bangladesh",
    value: 164669751,
  },
  {
    id: "3.139",
    parent: "2.13",
    name: "Iran",
    value: 81162788,
  },
  {
    id: "2.11",
    parent: "1.3",
    name: "Eastern Asia",
  },
  {
    id: "3.117",
    parent: "2.11",
    name: "China",
    value: 100517397,
  },
  {
    id: "3.118",
    parent: "2.11",
    name: "Japan",
    value: 127484450,
  },
  {
    id: "3.119",
    parent: "2.11",
    name: "South Korea",
    value: 50982212,
  },
  {
    id: "3.120",
    parent: "2.11",
    name: "North Korea",
    value: 25490965,
  },
  {
    id: "2.12",
    parent: "1.3",
    name: "South-Eastern Asia",
  },
  {
    id: "3.125",
    parent: "2.12",
    name: "Indonesia",
    value: 263991379,
  },
  {
    id: "3.126",
    parent: "2.12",
    name: "Philippines",
    value: 104918090,
  },
  {
    id: "3.127",
    parent: "2.12",
    name: "Vietnam",
    value: 95540800,
  },
  {
    id: "2.14",
    parent: "1.3",
    name: "Western Asia",
  },
  {
    id: "3.152",
    parent: "2.14",
    name: "United Arab Emirates",
    value: 9400145,
  },
  {
    id: "3.161",
    parent: "2.14",
    name: "Bahrain",
    value: 1492584,
  },
  {
    id: "2.15",
    parent: "1.4",
    name: "Eastern Europe",
  },
  {
    id: "3.162",
    parent: "2.15",
    name: "Russia",
    value: 143989754,
  },
  {
    id: "3.163",
    parent: "2.15",
    name: "Ukraine",
    value: 44222947,
  },
  {
    id: "3.164",
    parent: "2.15",
    name: "Poland",
    value: 38170712,
  },
  {
    id: "2.16",
    parent: "1.4",
    name: "Northern Europe",
  },
  {
    id: "3.173",
    parent: "2.16",
    name: "United Kingdom",
    value: 66181585,
  },
  {
    id: "3.174",
    parent: "2.16",
    name: "Sweden",
    value: 9910701,
  },
  {
    id: "3.177",
    parent: "2.16",
    name: "Norway",
    value: 5305383,
  },
  {
    id: "2.17",
    parent: "1.4",
    name: "Southern Europe",
  },
  {
    id: "3.188",
    parent: "2.17",
    name: "Greece",
    value: 11159773,
  },
  {
    id: "3.189",
    parent: "2.17",
    name: "Portugal",
    value: 10329506,
  },
  {
    id: "2.18",
    parent: "1.4",
    name: "Western Europe",
  },
  {
    id: "3.202",
    parent: "2.18",
    name: "Germany",
    value: 82114224,
  },
  {
    id: "3.203",
    parent: "2.18",
    name: "France",
    value: 64979548,
  },
  {
    id: "3.204",
    parent: "2.18",
    name: "Netherlands",
    value: 17035938,
  },
];

export const SunburstChart = () => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const options = mergeWithDefault({
    chart: {
      width,
      height,
    },
    title: {
      text: "A sunburst chart",
    },
    series: [
      {
        type: "sunburst",
        data: data,
        name: "Root",
        cursor: "pointer",
        color: "transparent",
        allowTraversingTree: true,
        dataLabels: {
          format: "{point.name}",
          rotationMode: "circular",
        },
        levels: [
          {
            level: 1,
            dataLabels: {
              filter: {
                property: "outerArcLength",
                operator: ">",
                value: 64,
              },
            },
          },
          {
            level: 2,
            colorByPoint: true,
          },
          {
            level: 3,
            colorVariation: {
              key: "brightness",
              to: -0.5,
            },
          },
          {
            level: 4,
            colorVariation: {
              key: "brightness",
              to: 0.5,
            },
          },
        ],
      },
    ],
  });

  return (
    <div ref={ref} className="chart-container">
      {height && (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
        />
      )}
    </div>
  );
};
