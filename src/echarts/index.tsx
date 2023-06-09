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
import { SunburstChart } from "./sunburst";

const EchartsDemo = () => {
  return (
    <div className="grid">
      <p className="title">Echarts</p>
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
        <SunburstChart />
      </div>
    </div>
  );
};

export default EchartsDemo;
