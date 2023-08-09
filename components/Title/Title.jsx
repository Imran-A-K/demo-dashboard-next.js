"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Title({ sideNavIsOpen, setSideNavIsOpen }) {
  const pathName = usePathname();

  return (
    <div className="flex py-6 items-center justify-center relative">
      <button
        className="flex flex-col justify-center items-center absolute right-6 lg:hidden"
        onClick={() => setSideNavIsOpen(!sideNavIsOpen)}
      >
        <span
          className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            sideNavIsOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            sideNavIsOpen ? "opacity-0" : "opacity-1"
          }`}
        ></span>
        <span
          className={`bg-gray-950 dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            sideNavIsOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <h1 className="capitalize font-bold text-2xl max-sm:text-xl">
        {pathName === "/" ? "" : pathName.replace("/dashboard/", "")}
      </h1>
    </div>
  );
}

export default Title;
