// "use client";
import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Admin",
      path: "/admin",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];
  return (
    <div>
      {links.map((link) => {
        return (
          <Link className="ml-4" key={link.title} href={link.path}>
            {link.icon} {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
