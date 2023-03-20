import { ReactElement } from "react";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

export const ResponsiveWrapper = ({
  children,
}: {
  children: (props: SizeProps) => ReactElement;
}) => {
  return (
    <div className="chart-container">
      <ParentSize debounceTime={10}>
        {({ width, height }) => children({ width, height })}
      </ParentSize>
    </div>
  );
};

export type SizeProps = {
  width: number;
  height: number;
};
