import Chart, { Props } from "react-apexcharts";

import { useElementSize } from "../helpers";
import { APEX_CHART_PADDING } from "./constants";
import { mergeWithDefault } from "./helpers";

export const AreaSplineChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const props: Props = mergeWithDefault({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      fill: {
        type: "gradient",
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Area spline chart",
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
  });

  return (
    <div className="chart-container" ref={ref}>
      <Chart
        options={props.options}
        series={props.series}
        type="area"
        width={width - APEX_CHART_PADDING}
        height={height - APEX_CHART_PADDING}
      />
    </div>
  );
};
