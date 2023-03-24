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
import "./App.css";
import { PlotlyDemo } from "./plotly";

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
