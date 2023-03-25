import {
  BarChart as RCBarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

import { useElementSize } from "../helpers";
import { RECHARTS_MARGIN } from "./constants";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

export const ColumnChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  return (
    <div ref={ref} className="chart-container">
      <RCBarChart
        width={width}
        height={height}
        data={data}
        margin={RECHARTS_MARGIN}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </RCBarChart>
    </div>
  );
};
