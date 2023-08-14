"use client";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import Title from "@/components/Title/Title";
import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
function Layout({ children }) {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  return (
    <main className="flex max-[850px]:flex-col h-screen">
      <QueryClientProvider client={queryClient}>
        <aside className="flex-none w-full md:w-52 relative">
          <LeftSideBar
            sideNavIsOpen={sideNavIsOpen}
            setSideNavIsOpen={setSideNavIsOpen}
          />
        </aside>
        <section className="shrink w-full min-h-screen bg-sky-100/20 p-10">
          <div className="sm:px-10">
            <Title
              sideNavIsOpen={sideNavIsOpen}
              setSideNavIsOpen={setSideNavIsOpen}
            />
          </div>
          {children}
        </section>
      </QueryClientProvider>
    </main>
  );
}

export default Layout;
