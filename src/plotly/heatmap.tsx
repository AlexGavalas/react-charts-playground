import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  z: [
    [1, null, 30, 50, 1],
    [20, 1, 60, 80, 30],
    [30, 60, 1, -10, 20],
  ],
  x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  y: ["Morning", "Afternoon", "Evening"],
  type: "heatmap",
  // hoverongaps: false,
};

const data = [trace1];

const layout = {
  title: "Heatmap Plot",
};

export const HeatmapChart = () => {
  return <Plot data={data} layout={layout} className="chart-container" />;
};
