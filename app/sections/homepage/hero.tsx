"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { gsap } from "gsap";

const slidesData = [
  {
    img: "/hero/porsche.avif",
    badge: "/brand-logos/Porsche.png",
    title: "Porsche",
    description: [
      "Expert repair and maintenance for high-performance Porsche vehicles.",
      "We handle all models with precision and care.",
    ],
  },
  {
    img: "/hero/bmw.png",
    badge: "/brand-logos/BMW.png",
    title: "BMW",
    description: [
      "Precision servicing and repairs for all BMW models.",
      "Keeping your BMW running at peak performance.",
    ],
  },
  {
    img: "/hero/range-rover.png",
    badge: "/brand-logos/LandRover.png",
    title: "Range Rover",
    description: [
      "Luxury SUV repairs and performance optimization for Range Rover.",
      "Specialized care for off-road and premium vehicles.",
    ],
  },
  {
    img: "/hero/mercedes.png",
    badge: "/brand-logos/Mercedes.png",
    title: "Mercedes-Benz",
    description: [
      "Reliable servicing and restoration for Mercedes-Benz cars.",
      "Ensuring luxury and performance with every service.",
    ],
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageRefs = useRef<HTMLDivElement[]>([]);
  const badgeRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Parallax animation on slide change
  useEffect(() => {
    imageRefs.current.forEach((img, idx) => {
      gsap.to(img, {
        x: (idx - currentSlide) * 80,
        duration: 0.7,
        ease: "power2.out",
      });
    });

    badgeRefs.current.forEach((badge, idx) => {
      gsap.to(badge, {
        x: (idx - currentSlide) * 120,
        duration: 0.7,
        ease: "power2.out",
      });
    });

    textRefs.current.forEach((txt, idx) => {
      gsap.to(txt, {
        x: (idx - currentSlide) * 150, // text moves fastest for depth
        opacity: idx === currentSlide ? 1 : 1,
        duration: 0.7,
        ease: "power2.out",
      });
    });
  }, [currentSlide]);

  // Animate only the first car on page load
  useEffect(() => {
    if (imageRefs.current[0]) {
      gsap.fromTo(
        imageRefs.current[0],
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 },
      );
    }
  }, []);

  return (
    <div className="relative w-full h-[650px] bg-white overflow-hidden">
      <div className="absolute w-full h-[55%] bg-linear-to-t from-black/5 from-5%  inset-0" />
      <div ref={sliderRef} className="keen-slider h-[90%]">
        {slidesData.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide relative w-full flex justify-center items-center h-full"
          >
            <div
              ref={(el) => {
                if (el) imageRefs.current[idx] = el;
              }}
              className="absolute w-full h-full max-h-[400px] bg-contain max-w-4xl mx-auto bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            />

            {/* Badge */}
            <div className="absolute bottom-7 left-0 w-full">
              <div className="container flex gap-2 justify-center items-start  ">
                <div
                  ref={(el) => {
                    if (el) badgeRefs.current[idx] = el;
                  }}
                  className=" w-10 h-10 bg-contain bg-no-repeat bg-center z-20"
                  style={{ backgroundImage: `url(${slide.badge})` }}
                />
                <div
                  ref={(el) => {
                    if (el) textRefs.current[idx] = el;
                  }}
                  className="F z-30 max-w-xl"
                >
                  <h2 className="text-4xl text-slate-900 tracking-tight font-bold drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {slide.description.map((line, i) => (
                    <p
                      key={i}
                      className="mt-1 text-slate-800 text-lg drop-shadow-md"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                {/* Text */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-40"
        onClick={() => slider?.current?.prev()}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-40"
        onClick={() => slider?.current?.next()}
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${
              currentSlide === idx ? "bg-black w-6" : "bg-gray-400"
            }`}
            onClick={() => slider?.current?.moveToIdx(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
