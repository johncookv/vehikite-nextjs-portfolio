import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed md:absolute left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto
    flex items-center justify-center overflow-hidden"
    >
      <div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark animate-spin-slow" />
        <Link
          href="mailto:johncookv@gmail.com"
          className="flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
        shadow-md border border-solid border-dark w-24 h-24 rounded-full font-semibold
        hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
