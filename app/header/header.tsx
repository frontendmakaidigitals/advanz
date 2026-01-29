"use client";
import Logo from "../components/Logo";
import Nav from "./nav";
import { LiquidGlassCard } from "../components/liquid-glass";
import NavButton from "./nav-button";
import { useEffect, useState } from "react";
export const pages = [
  { label: "home", links: "/" },
  { label: "about", links: "/about" },
  { label: "services", links: "/services" },
  { label: "contact", links: "/contact" },
];
const Header = () => {
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsBlur(true);
      } else {
        setIsBlur(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed inset-0 w-full h-fit z-60 ">
      <LiquidGlassCard
        glowIntensity={isBlur ? "sm" : "none"}
        shadowIntensity="none"
        borderRadius="0px"
        blurIntensity={isBlur ? "xl" : "none"}
        className="py-2 shadow-none!"
        draggable={false}
      >
        <div className="container relative z-70 flex justify-between items-center">
          <Nav />
          <Logo className="relative z-60" />
          <NavButton />
        </div>
      </LiquidGlassCard>
    </div>
  );
};

export default Header;
