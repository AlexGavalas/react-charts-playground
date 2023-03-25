import Chart, { Props } from "react-apexcharts";

import { useElementSize } from "../helpers";
import { APEX_CHART_PADDING } from "./constants";
import { mergeWithDefault } from "./helpers";

export const ColumnChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  const props: Props = mergeWithDefault({
    options: {
      title: {
        text: "Column chart",
      },
    },
    series: [
      {
        data: [
          {
            x: "category A",
            y: 10,
          },
          {
            x: "category B",
            y: 18,
          },
          {
            x: "category C",
            y: 13,
          },
        ],
      },
    ],
  });

  return (
    <div className="chart-container" ref={ref}>
      <Chart
        options={props.options}
        series={props.series}
        type="bar"
        width={width - APEX_CHART_PADDING}
        height={height - APEX_CHART_PADDING}
      />
    </div>
  );
};
