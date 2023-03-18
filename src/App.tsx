import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HighchartsDemo } from "./highcharts";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HighchartsDemo />,
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
