import Links from "./links/Links";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="border-b-2 sticky top-0 py-4 px-6 text-black mx-auto w-full z-10">
      <nav className="flex items-center rounded-xl px-5 bg-white  drop-shadow-xl   justify-between h-[70px] max-w-[1200px] mx-auto">
        <div className="">
          <Link className="font-bold text-2xl" href="/">
            Logo
          </Link>
        </div>
        <div className="flex gap-6 text-black items-center justify-center">
          <Links />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
