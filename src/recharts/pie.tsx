import { PieChart as RCPieChart, Pie, Legend, Tooltip } from "recharts";

import { useElementSize } from "../helpers";
import { RECHARTS_MARGIN } from "./constants";

const data = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

export const PieChart = () => {
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
          fill="#8884d8"
          label
        />
      </RCPieChart>
    </div>
  );
};
