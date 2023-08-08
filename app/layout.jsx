"use client";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Title from "@/components/Title/Title";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex max-[850px]:flex-col h-screen">
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
      </body>
    </html>
  );
}
