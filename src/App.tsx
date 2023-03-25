import { Suspense, lazy } from "react";

import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const HighchartsDemo = lazy(() => import("./highcharts")); // 726
const RechartsDemo = lazy(() => import("./recharts")); // 665
const ChartjsDemo = lazy(() => import("./chartjs")); // 3200
const VisXDemo = lazy(() => import("./visx")); // 657
const EchartsDemo = lazy(() => import("./echarts")); // 1200
const PlotlyDemo = lazy(() => import("./plotly")); // 3900
const ApexChartsDemo = lazy(() => import("./apexcharts")); // 706

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
      <Suspense fallback="Loading ...">
        <Outlet />
      </Suspense>
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
