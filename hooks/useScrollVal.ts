import { useEffect, useState, useRef } from "react";

export function useScrollPosition() {
  const [scrollVal, setScrollVal] = useState(0);
  const [lastScrollVal, setLastScrollVal] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setLastScrollVal(scrollVal);
          setScrollVal(current);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollVal]);

  return { scrollVal, lastScrollVal };
}