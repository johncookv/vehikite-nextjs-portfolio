import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const CustomLink = ({ href, className = "", children }) => (
  <Link href={href} className={`${className} relative`}>
    {children}
    <span className="h-[1px] inline-block w-full bg-dark absolute left-0 -bottom-0.5">
      &nbsp;
    </span>
    {/* TODO: Continue from 33:46 */}
  </Link>
);

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" className="mr-4">
          Home
        </CustomLink>
        <CustomLink href="/about" className="mx-4">
          About
        </CustomLink>
        <CustomLink href="/projects" className="mx-4">
          Projects
        </CustomLink>
        <CustomLink href="/articles" className="ml-4">
          Articles
        </CustomLink>
      </nav>
      <nav>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
