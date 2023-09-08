import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, XTwitterIcon } from "./Icons";
import { useRouter } from "next/router";

const NavLink = ({ href, className = "", children }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {children}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
      {/* TODO: Continue from 33:46 */}
    </Link>
  );
};

const IconLink = ({ href, className, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className={`${className} w-6`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <NavLink href="/" className="mr-4">
          Home
        </NavLink>
        <NavLink href="/about" className="mx-4">
          About
        </NavLink>
        <NavLink href="/projects" className="mx-4">
          Projects
        </NavLink>
        <NavLink href="/articles" className="ml-4">
          Articles
        </NavLink>
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <IconLink
          href="https://www.linkedin.com/in/johnvehikite/"
          className="ml-4"
        >
          <LinkedInIcon />
        </IconLink>
        <IconLink href="https://github.com/johncookv" className="mx-4">
          <GithubIcon />
        </IconLink>
        <IconLink href="https://twitter.com/fajitatt" className="mr-4">
          <XTwitterIcon />
        </IconLink>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
