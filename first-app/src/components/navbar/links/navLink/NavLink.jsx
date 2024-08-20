"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isActive = pathName === link.path;

  return (
    <Link
      href={link.path}
      className={`p-4 ${
        isActive ? "bg-purple-500 text-white font-bold rounded-lg" : ""
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
