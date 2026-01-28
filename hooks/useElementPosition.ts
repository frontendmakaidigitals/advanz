"use client";
import { useEffect, useState } from "react";
type Point = "top" | "center" | "bottom";

export function useElementPositionTrigger(
  ref: React.RefObject<HTMLElement>,
  options: {
    elementPoint?: Point;
    triggerPoint?: Point;
    once?: boolean;
  } = {}
) {
  const {
    elementPoint = "bottom",
    triggerPoint = "bottom",
    once = true,
  } = options;

  const [isTriggered, setIsTriggered] = useState(false);
  const [position, setPosition] = useState<{
    element: number;
    viewport: number;
  }>({ element: 0, viewport: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const getPoint = (rect: DOMRect, point: Point) => {
      switch (point) {
        case "top":
          return rect.top;
        case "center":
          return rect.top + rect.height / 2;
        case "bottom":
          return rect.bottom;
      }
    };

    const getViewportPoint = (point: Point) => {
      switch (point) {
        case "top":
          return 0;
        case "center":
          return window.innerHeight / 2;
        case "bottom":
          return window.innerHeight;
      }
    };

    const checkPosition = () => {
      const rect = ref.current!.getBoundingClientRect();
      const elementPos = getPoint(rect, elementPoint);
      const viewportPos = getViewportPoint(triggerPoint);

      setPosition({ element: elementPos, viewport: viewportPos });

      if (elementPos <= viewportPos) {
        setIsTriggered(true);
        if (once) window.removeEventListener("scroll", checkPosition);
      } else if (!once) {
        setIsTriggered(false);
      }
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition);
    checkPosition();

    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, [ref, elementPoint, triggerPoint, once]);

  return { isTriggered, position };
}