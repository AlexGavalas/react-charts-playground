import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "markers",
  type: "scatter",
};

const trace2: Datum = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: "markers",
  type: "scatter",
};

const data = [trace1, trace2];

const layout = {
  title: "Scatter Plot",
};

export const ScatterChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
