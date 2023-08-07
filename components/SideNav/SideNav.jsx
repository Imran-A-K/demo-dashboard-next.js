import { CloseIcon } from "../Icons/CloseIcon";

function SideNav({ sideNavIsOpen, setSideNavIsOpen }) {
  return (
    <aside>
      <div
        onClick={(event) => {
          setSideNavIsOpen(false);
          event.stopPropagation();
        }}
        className={`${
          sideNavIsOpen
            ? "fixed top-0 left-0 w-full h-screen bg-black/20 z-40"
            : "w-0 opacity-0"
        }`}
      />
      <section
        className={`${
          sideNavIsOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
xl:max-w-[30vw] transition-all duration-500 ease-linear z-50 px-4 lg:px-[35px] font-mono`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="capitalize text-sm font-semibold ">Dashboard</div>
          <div
            onClick={() => setSideNavIsOpen(false)}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <CloseIcon />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[600px] md:h-[950px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b scroll-smooth">
          onfvkjfdn
        </div>
      </section>
    </aside>
  );
}

export default SideNav;
