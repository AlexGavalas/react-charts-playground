import {
  createBrowserRouter,
  NavLink,
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

const Root = () => {
  return (
    <>
      <nav className="nav">
        <NavLink to="/highcharts">Highcharts</NavLink>
        <NavLink to="/recharts">Recharts</NavLink>
        <NavLink to="/chartjs">Chartjs</NavLink>
        <NavLink to="/visx">VisX</NavLink>
        <NavLink to="/echarts">Echarts</NavLink>
        <NavLink to="/plotly">Plotly</NavLink>
        <NavLink to="/apexcharts">ApexCharts</NavLink>
      </nav>
      <Outlet />
    </>
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

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
