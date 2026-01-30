"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const stats = [
  {
    title: "500+",
    description: "Projects",
  },
  {
    title: "200+",
    description: " Clients",
  },
  {
    title: "10 ",
    description: "Awards",
  },
  {
    title: "24/7 ",
    description: "Support",
  },
];

const Stats = () => {
  return (
    <div className="section text-slate-50 bg-black py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl leading-1.2 mx-auto mb-4">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="text-yellow-500 uppercase tracking-wider text-sm font-semibold">
              Our Impact
            </span>
            <div className="w-12 h-[2px] bg-yellow-500"></div>
          </div>

          <h2 className="text-4xl split lg:text-5xl font-bold mb-4">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every service we
            provide
          </p>
        </div>
        <div className="relative mt-14">
          {/* Glow behind slate background */}
          <div className="absolute inset-0 z-10 rounded-2xl bg-yellow-400/60  blur-[30px]" />

          {/* Slate background */}
          <div className="grid grid-cols-1 bg-slate-100/70 relative z-10 backdrop-blur-xl py-7 rounded-xl lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`w-full px-7 ${
                  idx === stats.length - 1 ? "" : "border-r border-slate-700/30"
                }`}
              >
                <h4 className="text-4xl text-center lg:text-5xl font-bold text-slate-800">
                  {stat.title}
                </h4>
                <p className="text-center mt-2 text-slate-800">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
