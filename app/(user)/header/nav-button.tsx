import Link from "next/link";
const NavButton = () => {
  return (
    <Link href={"/contact"}>
      <div className="group  relative cursor-pointer text-sm p-2 w-30 border bg-amber-400  overflow-hidden text-black text-center font-semibold">
        <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          Book Now
        </span>
        <div className="flex gap-2 text-black bg-white z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300  ">
          <span>Book Now</span>
        </div>
      </div>
    </Link>
  );
};

export default NavButton;
