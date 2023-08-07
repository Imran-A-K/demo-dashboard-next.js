import React, { useState } from "react";
import PlusIcon from "../Icons/PlusIcon";
import SideNav from "../SideNav/SideNav";

function TitleSectionWithButton({}) {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  return (
    <section className="flex justify-between items-center py-6 sm:hidden">
      <div className="flex gap-2">
        <button
          className="md:hidden flex flex-col justify-center items-center"
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
      </div>
      <h1 className="font-bold text-xl">Doctors</h1>
      <button className="flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors duration-200 bg-slate-200 rounded-md px-4 py-2">
        Add Doctor {PlusIcon}
      </button>
      <>
        <SideNav
          sideNavIsOpen={sideNavIsOpen}
          setSideNavIsOpen={setSideNavIsOpen}
        />
      </>
    </section>
  );
}

export default TitleSectionWithButton;
