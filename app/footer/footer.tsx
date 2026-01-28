"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../components/Logo";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line reveal
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        },
      );

      // Footer items stagger
      gsap.fromTo(
        itemsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white px-6 md:px-20 pt-20 pb-10 overflow-hidden"
    >
      {/* Top divider */}
      <div
        ref={lineRef}
        className="origin-left h-px w-full bg-gradient-to-r from-yellow-500/80 to-transparent mb-16"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div
          ref={(el) => {
            if (el) itemsRef.current[0] = el;
          }}
          className="space-y-4"
        >
          <Logo className="w-40" />
          <p className="text-gray-400 leading-relaxed text-sm">
            Premium automotive service and performance solutions for luxury
            vehicles. Precision, trust, and excellence.
          </p>
        </div>

        {/* Services */}
        <div
          ref={(el) => {
            if (el) itemsRef.current[1] = el;
          }}
        >
          <h4 className="mb-4 font-semibold tracking-wide text-sm uppercase">
            Services
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Maintenance</li>
            <li>Diagnostics</li>
            <li>Performance Upgrades</li>
            <li>Luxury Repairs</li>
          </ul>
        </div>

        {/* Quick links */}
        <div
          ref={(el) => {
            if (el) itemsRef.current[2] = el;
          }}
        >
          <h4 className="mb-4 font-semibold tracking-wide text-sm uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div
          ref={(el) => {
            if (el) itemsRef.current[3] = el;
          }}
          className="space-y-4"
        >
          <h4 className="font-semibold tracking-wide text-sm uppercase">
            Contact
          </h4>
          <p className="text-gray-400 text-sm">
            Call us directly for appointments
          </p>
          <a
            href="tel:+1234567890"
            className="text-yellow-400 text-xl font-semibold hover:text-yellow-300 transition-colors"
          >
            +1 234 567 890
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Advanz TECH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
