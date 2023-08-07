"use client";
function Tabs({
  activeTab,
  setActiveTab,
  tabs,
  filteredData,
  setFilteredData,
  doctors,
}) {
  const changeTab = (type) => {
    setActiveTab(type);

    if (type === "All") {
      setFilteredData(doctors);
    } else {
      const filtered = doctors.filter((doctor) => doctor.type === type);
      setFilteredData(filtered);
    }
  };
  return (
    <article className="py-4">
      <div className="flex gap-4 justify-center">
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
      </div>
    </article>
  );
}

export default Tabs;
