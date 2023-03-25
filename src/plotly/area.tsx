import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const trace1: Datum = {
  x: [1, 2, 3, 4],
  y: [0, 2, 3, 5],
  fill: "tozeroy",
  type: "scatter",
};

const trace2: Datum = {
  x: [1, 2, 3, 4],
  y: [3, 5, 1, 7],
  fill: "tonexty",
  type: "scatter",
};

const data = [trace1, trace2];

const layout = {
  title: "Area Plot",
};

export const AreaChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
