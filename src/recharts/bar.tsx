import {
  BarChart as RCBarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

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

export const BarChart = () => {
  return (
    <ResponsiveContainer height={300}>
      <RCBarChart
        data={data}
        layout="vertical"
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#413ea0" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </RCBarChart>
    </ResponsiveContainer>
  );
};
