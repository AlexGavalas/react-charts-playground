import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { mergeWithDefault } from "./helpers";
import { useElementSize } from "../helpers";

export const AreaSplineChart = () => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const options = mergeWithDefault({
    chart: {
      width,
      height,
    },
    title: {
      text: "An area spline chart",
    },
    series: [
      {
        type: "areaspline",
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
