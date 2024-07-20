import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="text-red-700    ">
          <h1>Logo</h1>
        </div>
        <div className="nav-items">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/admin">ADMIN</Link>
          <Link href="/login">LOGIN</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
