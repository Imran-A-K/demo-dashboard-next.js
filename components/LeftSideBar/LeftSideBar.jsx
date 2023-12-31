"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon } from "../Icons/CloseIcon";
function LeftSideBar({ sideNavIsOpen, setSideNavIsOpen }) {
  const pathName = usePathname();
  const routes = [
    { name: "Doctors", href: "/dashboard/doctors" },
    { name: "Appointments", href: "/dashboard/appointments" },
    { name: "Settings", href: "/dashboard/settings" },
    { name: "CheckView", href: "/dashboard/checkView" },
  ];

  return (
    <>
      {sideNavIsOpen && (
        <div
          onClick={(event) => {
            setSideNavIsOpen(false);
            event.stopPropagation();
          }}
          className={`fixed top-0 left-0 w-full h-screen bg-black/20 z-10 lg:hidden`}
        />
      )}
      <section
        className={`w-52 z-30 bg-blue-100 lg:bg-blue-100/40 fixed top-0 transition-all ease-linear duration-300 lg:left-0 bottom-0 p-3 ${
          sideNavIsOpen ? "left-0" : "-left-56"
        }`}
      >
        <div className="py-5 pl-5 font-bold text-xl">DashBoard</div>
        <nav>
          <ul className="flex flex-col gap-4 pl-5 w-full text-lg">
            {routes.map((route, index) => (
              // <li
              //   key={index}
              //   onClick={() => setSideNavIsOpen(false)}
              //   className={`hover:bg-sky-500/40 w-full py-1 px-2 rounded-md ${
              //     pathName === route.href && "bg-blue-500 text-white"
              //   }`}
              // >
              //   <Link href={route.href}>{route.name}</Link>
              // </li>

              <Link key={index} href={route.href}>
                <li
                  onClick={() => setSideNavIsOpen(false)}
                  className={` w-full py-1 px-2 rounded-md ${
                    pathName === route.href
                      ? "bg-blue-500 text-white hover:bg-blue-500"
                      : "hover:bg-sky-500/40"
                  }`}
                >
                  {route.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default LeftSideBar;
