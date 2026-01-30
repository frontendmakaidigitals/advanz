"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { useSplitText } from "@/hooks/useSpliText";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const greenDivRef = useRef<HTMLDivElement>(null);
  const redDivRef = useRef<HTMLDivElement>(null);
  useSplitText({
    selector: ".about-1",
    trigger: greenDivRef.current!,
    start: "top 80%",
    y: 20,
    stagger: 0.02,
    type: "chars, lines",
  });
  useSplitText({
    selector: ".about-2",
    trigger: redDivRef.current!,
    start: "top 80%",
    y: 20,
    stagger: 0.04,
    type: "words, lines",
  });
  useEffect(() => {
    // Parallax for green div (more movement)
    if (greenDivRef.current) {
      gsap.to(greenDivRef.current, {
        scrollTrigger: {
          trigger: greenDivRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -80, // Move up by 150px
        ease: "none",
      });
    }

    // Parallax for red div (slight movement)
    if (redDivRef.current) {
      gsap.to(redDivRef.current, {
        scrollTrigger: {
          trigger: redDivRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50, // Move up by 50px (subtle)
        ease: "none",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-semibold about-1 mb-5">
            Is your luxury car not getting the care it deserves?
          </h2>

          <h3 className="text-3xl about-2 font-bold">
            Finding skilled, trustworthy service for luxury vehicles isn’t
            always easy. Precision, experience, and the right expertise matter
            more than ever when it comes to high-end automobiles.
          </h3>

          <p className="mt-10 font-medium">
            We specialize in personalized, dealership-level service without the
            dealership hassle. From advanced diagnostics to performance-focused
            repairs, our team works meticulously to restore, maintain, and
            elevate your vehicle — so every drive feels exactly the way it
            should.
          </p>

          <button className="px-4 py-2 mt-8 bg-yellow-500 text-black">
            Book a service now
          </button>
        </div>

        <div className="relative flex justify-end">
          <div
            ref={greenDivRef}
            className="bg-green-400 shadow-md z-10 w-2xs absolute left-10 -top-8 aspect-square"
          >
            <Image
              src={"/about/about-1.avif"}
              className="object-cover"
              alt={"about"}
              fill
            />
          </div>
          <div ref={redDivRef} className="w-2/3 h-[500px] bg-red-300">
            <Image
              src={"/about/about-2.png"}
              alt={"about"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
