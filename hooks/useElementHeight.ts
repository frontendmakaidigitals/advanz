"use client";
import { useEffect, useRef, useState } from "react";

type SelectorType = { className?: string; id?: string };

const useElementSize = <T extends HTMLElement>(selector?: SelectorType) => {
  const internalRef = useRef<T | null>(null);
  const [size, setSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    let element: T | null = null;

    if (selector?.className) {
      element = document.querySelector<T>(`.${selector.className}`);
    } else if (selector?.id) {
      element = document.getElementById(selector.id) as T | null;
    } else if (internalRef.current) {
      element = internalRef.current;
    }

    if (!element) return;

    const updateSize = () => {
      setSize({
        height: element?.clientHeight ?? 0,
        width: element?.clientWidth ?? 0,
      });
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);
    updateSize();

    return () => observer.disconnect();
  }, [selector?.className, selector?.id]);

  return {
    ref: selector ? null : internalRef,
    height: size.height,
    width: size.width,
  };
};

export default useElementSize;
