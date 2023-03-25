import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  type: "bar",
  x: [20, 14, 23],
  y: ["giraffes", "orangutans", "monkeys"],
  orientation: "h",
};

const data = [trace1];

const layout = {
  title: "Bar Plot",
};

export const BarChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
