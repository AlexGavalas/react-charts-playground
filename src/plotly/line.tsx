import Plot from "react-plotly.js";

const trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
};

const trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: "lines",
};

const trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines+markers",
};

const data = [trace1, trace2, trace3];

const layout = {
  title: "Line Plot",
};

export const LineChart = () => {
  return <Plot data={data} layout={layout} className="chart-container" />;
};
