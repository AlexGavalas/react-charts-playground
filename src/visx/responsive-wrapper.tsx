import { ComponentType } from "react";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

export const withSize = (Component: ComponentType<SizeProps>) => {
  const WrappedComponent = (props: any) => {
    return (
      <div className="chart-container">
        <ParentSize debounceTime={10}>
          {(size) => <Component {...size} {...props} />}
        </ParentSize>
      </div>
    );
  };

  return WrappedComponent;
};

export type SizeProps = {
  width: number;
  height: number;
};
