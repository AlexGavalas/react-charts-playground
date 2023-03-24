import { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
import type { CSSProperties } from "react";
import type { EChartsOption, ECharts, SetOptionOpts } from "echarts";

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
}

export function ReactECharts({
  option,
  style,
  settings,
  loading,
}: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;

    if (chartRef.current) {
      chart = init(chartRef.current);
    }

    function resizeChart() {
      chart?.resize();
    }

    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings]);

  useEffect(() => {
    if (chartRef.current) {
      const chart = getInstanceByDom(chartRef.current);

      if (loading) {
        chart?.showLoading();
      } else {
        chart?.hideLoading();
      }
    }
  }, [loading]);

  return <div ref={chartRef} className="chart-container" />;
}
