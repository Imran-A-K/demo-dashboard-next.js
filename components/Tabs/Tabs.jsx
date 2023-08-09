"use client";

import Button from "../Button/Button";

function Tabs({
  activeTab,

  tabs,

  changeTab,
}) {
  return (
    <article className="py-4 max-sm:hidden">
      <>
        <div className="flex gap-4 justify-center">
          {tabs.map((tab) => (
            <Button
              key={tab}
              tab={tab}
              activeTab={activeTab}
              onClickFunction={() => changeTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </>
      <>
        <div className="md:hidden py-6 my-2">
          <select
            className="block w-full font-semibold rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-teal-600 focus:ring-opacity-50 p-2"
            value={activeTab}
            onChange={(e) => changeTab(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>
      </>
    </article>
  );
}

export default Tabs;

{
  /* <div className="flex gap-4 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold rounded-lg text-white hover:bg-blue-500 transition-colors duration-200 ${
              activeTab === tab ? "bg-blue-500 " : "bg-slate-700"
            }`}
            onClick={() => {
              changeTab(tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div> */
}
