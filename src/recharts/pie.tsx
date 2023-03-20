import {
  PieChart as RCPieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

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
  return (
    <ResponsiveContainer height={300} className="chart-container">
      <RCPieChart>
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
    </ResponsiveContainer>
  );
};
