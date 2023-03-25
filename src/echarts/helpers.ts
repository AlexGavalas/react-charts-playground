import type { EChartsOption, SetOptionOpts } from "echarts";
import merge from "lodash/fp/merge";

const PRIMARY_COLOR = "white";

export const mergeWithDefault = ({
  option,
  settings,
}: {
  option?: EChartsOption;
  settings?: SetOptionOpts;
}) => {
  const seriesOption: EChartsOption["series"] = {
    itemStyle: {
      borderRadius: 3,
    },
    label: {
      color: PRIMARY_COLOR,
    },
  };

  const commonOption: EChartsOption = {
    title: {
      left: "center",
      textStyle: {
        color: PRIMARY_COLOR,
      },
    },
    legend: {
      bottom: 0,
      textStyle: {
        color: PRIMARY_COLOR,
      },
    },
    textStyle: {
      color: PRIMARY_COLOR,
    },
    tooltip: {},
    series: Array.isArray(option?.series)
      ? option?.series.map((seriesItem) => merge(seriesItem, seriesOption))
      : merge(option?.series, seriesOption),
  };

  const commonSettings: SetOptionOpts = {};

  return {
    option: merge(commonOption, option),
    settings: merge(commonSettings, settings),
  };
};
