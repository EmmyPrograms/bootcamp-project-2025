/*
    generates a navbar component for all pages (used in layout.tsx)
    @author Amelia Harris
    @version 2.0
*/


import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50  bg-primary flex justify-between items-center px-6 py-4 text-white font-bold tracking-widest">
      <h2> Amelia's Personal Website </h2>
      <nav className="flex space-x-6 ">
        <Link
          href="/"
        >
          <div className="hoverSecondary">Home</div>
        </Link>
        <Link
          href="/blog"
          className="hoverSecondary"
        >
          Blogs
        </Link>
        <Link
          href="/portfolio"
          className="hoverSecondary"
        >
          Portfolio
        </Link>
        <Link
          href="/resume"
          className="hoverSecondary"
        >
          Resume
        </Link>
        <Link
          href="/contact"
          className="hoverSecondary"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
