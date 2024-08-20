"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathname = usePathname(); // Corrected variable name

  return (
    <Link
      href={link.path}
      className={`p-4 ${
        pathname === link.path
          ? "bg-purple-500 text-white font-bold rounded-lg"
          : ""
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
