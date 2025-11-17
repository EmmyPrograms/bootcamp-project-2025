/*
    generates a navbar component for all pages (used in layout.tsx)
    @author Amelia Harris
    @version 2.0
*/

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-10 bg-primary flex justify-between items-center px-6 py-4 text-white font-bold tracking-widest">
      <h2> Amelia's Personal Website </h2>
      <nav className="flex space-x-6 ">
        <Link
          href="./"
          className="hover:text-secondary transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="./blog"
          className="hover:text-secondary transition-colors duration-200"
        >
          Blogs
        </Link>
        <Link
          href="./portfolio"
          className="hover:text-secondary transition-colors duration-200"
        >
          Portfolio
        </Link>
        <Link
          href="./resume"
          className="hover:text-secondary transition-colors duration-200"
        >
          Resume
        </Link>
        <Link
          href="./contact"
          className="hover:text-secondary transition-colors duration-200"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
