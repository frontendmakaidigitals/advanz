"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../components/Logo";
import { Facebook, Instagram, Twitter } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer items on scroll
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate line
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer relative bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top divider */}
      <div
        ref={lineRef}
        className="origin-left h-[2px] w-full bg-gradient-to-r from-yellow-500 via-yellow-400/50 to-transparent mb-20 relative"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div
            ref={(el) => {
              if (el) itemsRef.current[0] = el;
            }}
            className="space-y-6 lg:col-span-1"
          >
            <Logo className="w-44 brightness-110" />
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Premium automotive service and performance solutions for luxury
              vehicles. Precision, trust, and excellence delivered every time.
            </p>
            {/* Social links */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <Facebook />, name: "" },
                { icon: <Instagram />, name: "" },
                { icon: <Twitter />, name: "" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-500/50 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social}
                >
                  <span className="text-gray-400 group-hover:text-yellow-500 transition-colors text-sm">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div
            ref={(el) => {
              if (el) itemsRef.current[1] = el;
            }}
          >
            <h4 className="mb-6 font-bold tracking-wider text-sm uppercase text-white relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-yellow-500" />
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Maintenance & Servicing",
                "Advanced Diagnostics",
                "Performance Upgrades",
                "Luxury Vehicle Repairs",
                "Body Shop Services",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-yellow-400 transition-colors cursor-pointer hover:translate-x-1 transform duration-200"
                >
                  → {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div
            ref={(el) => {
              if (el) itemsRef.current[2] = el;
            }}
          >
            <h4 className="mb-6 font-bold tracking-wider text-sm uppercase text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-yellow-500" />
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "About Us",
                "Our Services",
                "Gallery",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-yellow-400 transition-colors cursor-pointer hover:translate-x-1 transform duration-200"
                >
                  → {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            ref={(el) => {
              if (el) itemsRef.current[3] = el;
            }}
            className="space-y-6"
          >
            <h4 className="font-bold tracking-wider text-sm uppercase text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-yellow-500" />
            </h4>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Phone
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-yellow-400 text-xl font-bold hover:text-yellow-300 transition-colors block"
                >
                  +971 56 993 9879
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@advanztech.com"
                  className="text-gray-300 text-sm hover:text-yellow-400 transition-colors block"
                >
                  info@advanztech.com
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Location
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  30 22nd St - Al Qouz Ind.fourth
                  <br />
                  Al Quoz - Dubai - United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Advanz TECH. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
