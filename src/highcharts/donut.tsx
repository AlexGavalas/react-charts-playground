import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { mergeWithDefault } from "./helpers";
import { useElementSize } from "../helpers";

export const DonutChart = () => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const options = mergeWithDefault({
    chart: {
      width,
      height,
    },
    title: {
      text: "A donut chart",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Points",
      },
    },
    series: [
      {
        type: "pie",
        data: [
          { name: "Gryffindor", y: 34 },
          { name: "Ravenclaw", y: 59 },
          { name: "Hufflepuff", y: 32 },
          { name: "Slytherin", y: 40 },
        ],
        name: "Data series 1",
        innerSize: "60%",
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
