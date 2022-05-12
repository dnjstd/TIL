import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListner("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventLister("click", onClick);
      }
    };
  }, [onClick]);

  if (typeof onClick !== "function") {
    return;
  }

  return element;
};
