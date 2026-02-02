"use client";

import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type SplitTextOptions = {
  selector?: string;
  textRef?: React.RefObject<HTMLElement | null>;
  trigger?: string | Element;
  triggerRef?: React.RefObject<HTMLElement | null>;
  duration?: number;
  y?: number;
  alpha?: number;
  stagger?: number;
  start?: string;
  end?: string;
  once?: boolean;
  linesClass?: string;
  type?:
    | "words"
    | "chars"
    | "lines"
    | "words, chars"
    | "words, lines"
    | "chars, lines";
  delay?: number;
};

export function useSplitText({
  selector = ".split",
  textRef,
  trigger,
  triggerRef,
  duration = 1,
  y = 100,
  alpha = 0,
  stagger = 0.05,
  start = "top 80%",
  end = "bottom top",
  once = true,
  type = "words, chars",
  linesClass = "line-wrapper++",
  delay = 0,
}: SplitTextOptions = {}) {
  useEffect(() => {
    const target = textRef?.current || selector;
    if (!target) return;

    const split = new SplitText(target, {
      type,
      linesClass,
    });

    const targets =
      type === "chars"
        ? split.chars
        : type === "words"
          ? split.words
          : [...(split.words || []), ...(split.chars || [])];

    const animation = gsap.from(targets, {
      duration,
      y,
      autoAlpha: alpha,
      stagger,
      ease: "power3.out",
      delay,
      scrollTrigger:
        trigger || triggerRef?.current
          ? {
              trigger: triggerRef?.current || trigger,
              start,
              end,
              once,
            }
          : undefined,
    });

    return () => {
      split.revert();
      animation.kill();
      if (trigger || triggerRef?.current) {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, [
    selector,
    textRef,
    trigger,
    triggerRef,
    duration,
    y,
    alpha,
    stagger,
    start,
    end,
    once,
    type,
    delay,
  ]);
}
