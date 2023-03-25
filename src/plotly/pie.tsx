import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  values: [19, 26, 55],
  labels: ["Residential", "Non-Residential", "Utility"],
  type: "pie",
};

const data = [trace1];

const layout = {
  title: "Pie Plot",
};

export const PieChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
