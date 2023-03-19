import { useRef, useState, useLayoutEffect } from "react";

export const useElementSize = <T extends HTMLElement>() => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const handler = () => {
      if (ref.current?.clientHeight && height !== ref.current?.clientHeight) {
        setHeight(ref.current?.clientHeight);
      }

      if (ref.current?.clientWidth && height !== ref.current?.clientWidth) {
        setWidth(ref.current?.clientWidth);
      }
    };

    handler();

    ref.current?.addEventListener("resize", handler);
    window.addEventListener("resize", handler);

    return () => {
      ref.current?.removeEventListener("resize", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return {
    ref,
    height,
    width,
  };
};
