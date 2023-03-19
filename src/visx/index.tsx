import { Scales } from "./scales";
import { AreaChart } from "./area";
import { Legends } from "./legends";
// import { BarChart } from "./bar";
import { ColumnChart } from "./column";
// import { LineChart } from "./line";
import { SplineChart } from "./spline";
// import { PieChart } from "./pie";
// import { DonutChart } from "./donut";
import { ScatterChart } from "./scatter";

export const VisXDemo = () => {
  return (
    <div className="highcharts">
      <p>VisX</p>
      <div className="charts">
        <Scales />
        <AreaChart />
        <Legends />
        {/* <AreaSplineChart />
        <BarChart /> */}
        <ColumnChart />
        <SplineChart />
        <ScatterChart />
        {/* <LineChart />
        <PieChart />
        <DonutChart /> */}
        {/*<HeatmapChart />
        <PolarChart />
        <SunburstChart /> */}
      </div>
    </div>
  );
};
