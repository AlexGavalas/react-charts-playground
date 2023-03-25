import { type Props } from "react-apexcharts";
import merge from "lodash/fp/merge";

export const mergeWithDefault = (options: Props) => {
  const commonProps: Props = {
    options: {
      chart: {
        foreColor: "white",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
        },
      },
    },
  };

  return merge(commonProps, options);
};
