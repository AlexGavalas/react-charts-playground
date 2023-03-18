import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { useElementSize, mergeWithDefault } from "./helpers";

export const ScatterChart = () => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const options = mergeWithDefault({
    chart: {
      className: "highcharts-chart",
      width,
      height,
    },
    title: {
      text: "A scatter chart",
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
        type: "scatter",
        data: [
          { name: "House", y: 110 },
          { name: "Office", y: 130 },
          { name: "Garage", y: 140 },
        ],
      },
      {
        name: "Data metric 2",
        type: "scatter",
        data: [
          { name: "House", y: 110 },
          { name: "Office", y: 130 },
        ],
      },
      {
        name: "Data metric 3",
        type: "scatter",
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
