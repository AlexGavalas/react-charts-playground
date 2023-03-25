import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "lines",
  line: { shape: "spline" },
};

const trace2: Datum = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines+markers",
  line: { shape: "spline" },
};

const data = [trace1, trace2];

const layout = {
  title: "Spline Plot",
};

export const SplineChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
