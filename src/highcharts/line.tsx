import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { useElementSize, mergeWithDefault } from "./helpers";

export const LineChart = () => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const options = mergeWithDefault({
    chart: {
      className: "highcharts-chart",
      width,
      height,
    },
    title: {
      text: "A line chart",
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3, 4, 5, 6, 4, 1, -1],
        name: "Data series 1",
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
