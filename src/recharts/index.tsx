import { AreaChart } from "./area";
import { AreaSplineChart } from "./areaspline";
import { BarChart } from "./bar";
import { ColumnChart } from "./column";
import { LineChart } from "./line";
import { SplineChart } from "./spline";
import { PieChart } from "./pie";
import { DonutChart } from "./donut";
import { ScatterChart } from "./scatter";

export const RechartsDemo = () => {
  return (
    <div className="grid">
      <p className="title">Recharts</p>
      <div className="charts">
        <AreaChart />
        <AreaSplineChart />
        <BarChart />
        <ColumnChart />
        <LineChart />
        <SplineChart />
        <PieChart />
        <DonutChart />
        <ScatterChart />
      </div>
    </div>
  );
};
