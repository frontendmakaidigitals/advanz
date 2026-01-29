import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo/logo.png"
      alt="Logo"
      width={100}
      height={100}
      className={`drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)] ${className}`}
    />
  );
};

export default Logo;
