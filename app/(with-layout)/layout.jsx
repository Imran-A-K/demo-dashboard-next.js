"use client";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import Title from "@/components/Title/Title";
import { useState } from "react";

function Layout({ children }) {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  return (
    <main className="flex max-sm:flex-col h-screen">
      <aside className="flex-none w-full md:w-52 relative">
        <LeftSideBar
          sideNavIsOpen={sideNavIsOpen}
          setSideNavIsOpen={setSideNavIsOpen}
        />
      </aside>
      <section className="shrink w-full max-sm:h-screen bg-sky-100/20 p-10">
        <div className="sm:px-10">
          <Title
            sideNavIsOpen={sideNavIsOpen}
            setSideNavIsOpen={setSideNavIsOpen}
          />
        </div>
        {children}
      </section>
    </main>
  );
}

export default Layout;
