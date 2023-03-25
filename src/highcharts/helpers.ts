import merge from "lodash/fp/merge";

export const mergeWithDefault = (options: Highcharts.Options) => {
  const commonProps: Highcharts.Options = {
    credits: {
      enabled: false,
    },
  };

  return merge(commonProps, options);
};
