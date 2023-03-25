import { Scales } from "./scales";
import { AreaChart } from "./area";
import { Legends } from "./legends";
import { BarChart } from "./bar";
import { ColumnChart } from "./column";
import { HeatmapChart } from "./heatmap";
import { SplineChart } from "./spline";
import { PieChart } from "./pie";
import { ScatterChart } from "./scatter";

const VisXDemo = () => {
  return (
    <div className="grid">
      <p className="title">VisX</p>
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

export default VisXDemo;
