import Link from "next/link";
import React, { useState } from "react";
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

const MobileNavLink = ({ href, className = "", children, closeModal }) => {
  const router = useRouter();

  const handleClick = () => {
    closeModal();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {children}
      <span
        className={`h-[1px] inline-block  bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>

      {/* TODO: Continue from 33:46 */}
    </button>
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
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
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
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className={`min-w-[70vw] flex-col justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32 hidden lg:flex `}
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileNavLink closeModal={() => setIsOpen(false)} href="/">
              Home
            </MobileNavLink>
            <MobileNavLink closeModal={() => setIsOpen(false)} href="/about">
              About
            </MobileNavLink>
            <MobileNavLink closeModal={() => setIsOpen(false)} href="/projects">
              Projects
            </MobileNavLink>
            <MobileNavLink closeModal={() => setIsOpen(false)} href="/articles">
              Articles
            </MobileNavLink>
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <IconLink
              href="https://www.linkedin.com/in/johnvehikite/"
              className="ml-4 sm:mx-1"
            >
              <LinkedInIcon />
            </IconLink>
            <IconLink
              href="https://github.com/johncookv"
              className="mx-4 sm:mx-1 bg-light rounded-full dark:bg-dark"
            >
              <GithubIcon />
            </IconLink>
            <IconLink
              href="https://twitter.com/fajitatt"
              className="mr-4 sm:mx-1 bg-light rounded-full dark:bg-dark"
            >
              <XTwitterIcon />
            </IconLink>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
