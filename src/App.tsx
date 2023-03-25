import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { HighchartsDemo } from "./highcharts";
import { RechartsDemo } from "./recharts";
import { ChartjsDemo } from "./chartjs";
import { VisXDemo } from "./visx";
import { EchartsDemo } from "./echarts";
import { PlotlyDemo } from "./plotly";
import { ApexChartsDemo } from "./apexcharts";

import "./App.css";

const Root = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/highcharts">Highcharts</Link>
        <Link to="/recharts">Recharts</Link>
        <Link to="/chartjs">Chartjs</Link>
        <Link to="/visx">VisX</Link>
        <Link to="/echarts">Echarts</Link>
        <Link to="/plotly">Plotly</Link>
        <Link to="/apexcharts">ApexCharts</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "highcharts",
        element: <HighchartsDemo />,
      },
      {
        path: "recharts",
        element: <RechartsDemo />,
      },
      {
        path: "chartjs",
        element: <ChartjsDemo />,
      },
      {
        path: "visx",
        element: <VisXDemo />,
      },
      {
        path: "echarts",
        element: <EchartsDemo />,
      },
      {
        path: "plotly",
        element: <PlotlyDemo />,
      },
      {
        path: "apexcharts",
        element: <ApexChartsDemo />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
