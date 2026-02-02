import Image from "next/image";
import Link from "next/link";
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className={`drop-shadow-md ${className}`}
      />
    </Link>
  );
};

export default Logo;
