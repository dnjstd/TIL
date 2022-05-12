import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListner("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventLister("mouseenter", onHover);
      }
    };
  }, []);

  if (typeof onHover !== "function") {
    return;
  }

  return element;
};
