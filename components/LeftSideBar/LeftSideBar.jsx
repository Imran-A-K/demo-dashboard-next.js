"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function LeftSideBar() {
  const pathName = usePathname();
  const routes = [
    { name: "Home", href: "/home" },
    { name: "Doctors", href: "/doctors" },
    { name: "About", href: "/about" },
  ];
  const navLinks = (
    <>
      {routes.map((route, index) => (
        <li key={index} className="hover:bg-slate-100 bg-gray-500 w-full py-10">
          <Link href={route.href}>{route.name}</Link>
        </li>
      ))}
    </>
  );
  return (
    <section className="w-full md:w-52 bg-teal-100/40 fixed top-0 bottom-0 p-3">
      <div className="py-5 pl-5 font-bold text-xl">DashBoard</div>
      <nav>
        <ul className="flex flex-col gap-4 pl-5 w-full text-lg">
          {routes.map((route, index) => (
            <li
              key={index}
              className={`hover:bg-slate-300/40 w-full py-1 px-2 rounded-md ${
                pathName === route.href && "bg-slate-300/40"
              }`}
            >
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default LeftSideBar;
