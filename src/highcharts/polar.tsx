import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

import { useElementSize, mergeWithDefault } from "./helpers";

HighchartsMore(Highcharts);

export const PolarChart = () => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const options = mergeWithDefault({
    chart: {
      className: "highcharts-chart",
      width,
      height,
      polar: true,
    },
    title: {
      text: "A polar chart",
    },
    xAxis: {
      type: "category",
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "Data metric 1",
        type: "column",
        data: [
          { name: "House", y: 110 },
          { name: "Office", y: 130 },
          { name: "Garage", y: 140 },
        ],
      },
      {
        name: "Data metric 2",
        type: "column",
        data: [
          { name: "House", y: 110 },
          { name: "Office", y: 130 },
        ],
      },
      {
        name: "Data metric 3",
        type: "column",
        data: [
          { name: "House", y: 110 },
          { name: "Office", y: 130 },
          { name: "Garage", y: 140 },
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
