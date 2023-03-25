import {
  ScatterChart as RCScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useElementSize } from "../helpers";
import { RECHARTS_MARGIN } from "./constants";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export const ScatterChart = () => {
  const { ref, height, width } = useElementSize<HTMLDivElement>();

  return (
    <div ref={ref} className="chart-container">
      <RCScatterChart width={width} height={height} margin={RECHARTS_MARGIN}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </RCScatterChart>
    </div>
  );
};
