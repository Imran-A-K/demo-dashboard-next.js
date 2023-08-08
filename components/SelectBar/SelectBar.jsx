function SelectBar({ activeTab, tabs, changeTab }) {
  return (
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
  );
}

export default SelectBar;
