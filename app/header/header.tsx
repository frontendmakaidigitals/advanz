import Logo from "../components/Logo";
import Nav from "./nav";
import { LiquidGlassCard } from "../components/liquid-glass";
import NavButton from "./nav-button";
export const pages = [
  { label: "home", links: "/" },
  { label: "about", links: "/about" },
  { label: "services", links: "/services" },
  { label: "contact", links: "/contact" },
];

const Header = () => {
  return (
    <div className="fixed inset-0 w-full h-fit z-60 ">
      <LiquidGlassCard
        glowIntensity="sm"
        shadowIntensity="none"
        borderRadius="0px"
        blurIntensity="xl"
        className="py-2 shadow-none!"
        draggable={false}
      >
        <div className="container relative z-60 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4 relative ">
            <Nav />
            <NavButton />
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
};

export default Header;
