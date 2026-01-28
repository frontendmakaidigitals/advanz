"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactFormSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fieldsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Background parallax (NO PIN)
      if (bgRef.current && containerRef.current) {
        gsap.fromTo(
          bgRef.current,
          { y: "-15%" },
          {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      // Text parallax
      if (textRef.current) {
        gsap.to(textRef.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Form fields reveal
      fieldsRef.current.forEach((field, i) => {
        gsap.fromTo(
          field,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: field,
              start: "top 85%",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen px-6 md:px-20 flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 scale-110 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ireland-chauffeur.com/wp-content/uploads/2018/11/black-mercedes-benz-in-the-darkness-52170-1920x1200.jpg')",
        }}
      />
      <div className="absolute inset-0 w-full h-full bg-black/50 z-10" />

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 relative z-20 lg:grid-cols-2 gap-16 items-start">
        <div ref={textRef} className="mt-24">
          <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-6 text-white">
            Get in Touch
          </h2>
          <p className="text-gray-100">
            Have questions or want to book a service? Fill out the form and our
            team will get back to you promptly.
          </p>
        </div>

        <form className="space-y-4 bg-white/50 backdrop-blur-xl p-6 relative rounded-xl border border-slate-400">
          {["Name", "Email", "Phone", "Message"].map((label, i) => (
            <div
              key={i}
              ref={(el) => el && (fieldsRef.current[i] = el)}
              className="flex flex-col"
            >
              <label className="mb-2 font-medium">{label}</label>
              {label === "Message" ? (
                <textarea
                  placeholder="Enter message"
                  className="px-4 resize-none py-2 rounded-md bg-neutral-200 border border-slate-300"
                  rows={5}
                />
              ) : (
                <input
                  placeholder={`Enter ${label}`}
                  type={label === "Phone" ? "number" : "text"}
                  className="px-4 py-2 rounded-md bg-neutral-200 border border-slate-300"
                />
              )}
            </div>
          ))}
          <button className="px-6 py-2 bg-yellow-500 rounded-full font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
