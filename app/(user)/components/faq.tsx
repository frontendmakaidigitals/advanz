"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

interface FaqProps {
  question: string;
  answer: string;
}

const FAQ = ({ faq }: { faq: FaqProps[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate all FAQ items at once
      gsap.fromTo(
        containerRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none", // play once
          },
        },
      );

      // Optional: container parallax effect
      gsap.to(containerRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative">
      {faq.map((item, index) => (
        <div key={index} className="mb-3 will-change-transform">
          <Accordion type="single" collapsible>
            <AccordionItem
              value={item.question}
              className="border border-slate-300 hover:shadow-md hover:cursor-pointer! transition-shadow duration-200  bg-neutral-300 rounded-xl px-3"
            >
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
