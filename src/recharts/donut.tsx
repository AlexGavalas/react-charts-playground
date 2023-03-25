import { PieChart as RCPieChart, Pie, Legend, Tooltip } from "recharts";

import { useElementSize } from "../helpers";
import { RECHARTS_MARGIN } from "./constants";

const data = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    fill: "#e3e",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

export const DonutChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  return (
    <div ref={ref} className="chart-container">
      <RCPieChart width={width} height={height} margin={RECHARTS_MARGIN}>
        <Legend />
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          fill="#82ca9d"
          label
        />
      </RCPieChart>
    </div>
  );
};
