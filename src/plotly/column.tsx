import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  x: ["giraffes", "orangutans", "monkeys"],
  y: [20, 14, 23],
  type: "bar",
};

const data = [trace1];

const layout = {
  title: "Column Plot",
};

export const ColumnChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
