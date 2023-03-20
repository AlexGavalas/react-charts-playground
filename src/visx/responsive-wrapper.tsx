import { ComponentType, ReactElement } from "react";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

export const ResponsiveWrapper = ({
  children,
}: {
  children: (props: SizeProps) => ReactElement;
}) => {
  return (
    <div className="visx-chart">
      <ParentSize debounceTime={10}>
        {({ width, height }) => children({ width, height })}
      </ParentSize>
    </div>
  );
};

export const withSize = (Component: ComponentType<SizeProps>) => {
  const wrappedComponent = () => {
    return (
      <div className="visx-chart">
        <ParentSize debounceTime={10}>
          {(size) => <Component {...size} />}
        </ParentSize>
      </div>
    );
  };

  return wrappedComponent;
};

export type SizeProps = {
  width: number;
  height: number;
};
