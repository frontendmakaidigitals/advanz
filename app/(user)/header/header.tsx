"use client";
import Logo from "../components/Logo";
import Nav from "./nav";
import { LiquidGlassCard } from "../components/liquid-glass";
import NavButton from "./nav-button";
import { useEffect, useState } from "react";
export const pages = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "services", key: "services" },
  { label: "Blogs", href: "/blogs" },
  { label: "contact", href: "/contact" },
];
export const servicesList = [
  { label: "body shop", href: "/service/body-shop" },
  { label: "Car programming", href: "/service/car-programming" },
  { label: "recovery service", href: "/service/recovery-service" },
  { label: "spare parts", href: "/service/spare-parts" },
  { label: "workshop", href: "/service/workshop" },
];
const Header = () => {
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
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
          <div className="w-28">
            <Nav />
          </div>
          <Logo className="relative z-60" />
          <div className="hidden lg:block w-28">
            <NavButton />
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
};

export default Header;
