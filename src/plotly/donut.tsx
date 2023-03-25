import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  values: [19, 26, 55],
  labels: ["Residential", "Non-Residential", "Utility"],
  type: "pie",
  hole: 0.4,
};

const data = [trace1];

const layout = {
  title: "Donut Plot",
};

export const DonutChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
