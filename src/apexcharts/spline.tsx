import Chart, { Props } from "react-apexcharts";

import { useElementSize } from "../helpers";
import { APEX_CHART_PADDING } from "./constants";
import { mergeWithDefault } from "./helpers";

export const SplineChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const props: Props = mergeWithDefault({
    options: {
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Spline chart",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
  });

  return (
    <div className="chart-container" ref={ref}>
      <Chart
        options={props.options}
        series={props.series}
        type="line"
        width={width - APEX_CHART_PADDING}
        height={height - APEX_CHART_PADDING}
      />
    </div>
  );
};
