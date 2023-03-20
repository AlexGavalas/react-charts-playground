import { Scales } from "./scales";
import { AreaChart } from "./area";
import { Legends } from "./legends";
import { BarChart } from "./bar";
import { ColumnChart } from "./column";
import { HeatmapChart } from "./heatmap";
import { SplineChart } from "./spline";
import { PieChart } from "./pie";
import { ScatterChart } from "./scatter";

export const VisXDemo = () => {
  return (
    <div className="highcharts">
      <p>VisX</p>
      <div className="charts">
        <Scales />
        <Legends />
        <AreaChart />
        <BarChart />
        <ColumnChart />
        <SplineChart />
        <ScatterChart />
        <PieChart />
        <HeatmapChart />
      </div>
    </div>
  );
};
