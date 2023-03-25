import { AreaChart } from "./area";
import { AreaSplineChart } from "./areaspline";
import { BarChart } from "./bar";
import { ColumnChart } from "./column";
import { DonutChart } from "./donut";
import { HeatmapChart } from "./heatmap";
import { LineChart } from "./line";
import { PieChart } from "./pie";
import { PolarChart } from "./polar";
import { ScatterChart } from "./scatter";
import { SplineChart } from "./spline";

const ApexChartsDemo = () => {
  return (
    <div className="grid">
      <p className="title">Apexcharts</p>
      <div className="charts">
        <AreaChart />
        <AreaSplineChart />
        <BarChart />
        <ColumnChart />
        <LineChart />
        <SplineChart />
        <PieChart />
        <DonutChart />
        <HeatmapChart />
        <PolarChart />
        <ScatterChart />
      </div>
    </div>
  );
};

export default ApexChartsDemo;
