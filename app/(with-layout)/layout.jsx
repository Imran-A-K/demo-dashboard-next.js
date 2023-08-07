"use client";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";

function layout({ children }) {
  return (
    <main className="flex max-sm:flex-col h-screen">
      <aside className="flex-none w-full md:w-52 relative">
        <LeftSideBar />
      </aside>
      <section className="shrink w-full max-sm:h-screen bg-sky-100/20 p-10">
        {children}
      </section>
    </main>
  );
}

export default layout;
