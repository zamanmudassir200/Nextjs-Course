// import NavLink from "./navLink/NavLink";

// const Links = () => {
//   const links = [
//     {
//       title: "Home",
//       path: "/",
//     },
//     {
//       title: "About",
//       path: "/about",
//     },
//     {
//       title: "Blog",
//       path: "/blog",
//     },
//     {
//       title: "Contact",
//       path: "/contact",
//     },
//   ];
//   const session = false;
//   const isAdmin = true;
//   return (
//     <div>
//       {links.map((link) => {
//         return <NavLink key={link.title} link={link} />;
//       })}
//       {session ? (
//         <>
//           {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
//           <button> Logout</button>
//         </>
//       ) : (
//         <NavLink item={{ title: "Login", path: "/login" }} />
//       )}
//     </div>
//   );
// };

// export default Links;
import NavLink from "./navLink/NavLink";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
    { title: "Admin", path: "/admin" },
    { title: "Login", path: "/login" },
  ];
  const session = false;
  const isAdmin = true;
  return (
    <>
      <div>
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button> Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </>
  );
};

export default Links;
