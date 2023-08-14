"use client";
import React, { useEffect, useState } from "react";

function Settings() {
  const [selectedView, setSelectedView] = useState("Table View");
  useEffect(() => {
    const previousPreference = localStorage.getItem("viewPreference");
    !!previousPreference &&
      previousPreference !== "Table View" &&
      setSelectedView(previousPreference);
  }, []);
  const handleViewChange = (event) => {
    setSelectedView(event.target.value);
    localStorage.setItem("viewPreference", event.target.value);
  };
  return (
    <div className="flex flex-col justify-center">
      {JSON.stringify(selectedView !== "Table View")}
      <div className="main flex border rounded-full overflow-hidden m-4">
        <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
          Choose View
        </div>
        <label className="flex radio p-2 cursor-pointer">
          <input
            className="my-auto transform scale-125"
            type="radio"
            name="view"
            value="Table View"
            checked={selectedView === "Table View"}
            onChange={handleViewChange}
          />
          <div className="title px-2">Table View</div>
        </label>

        <label className="flex radio p-2 cursor-pointer">
          <input
            className="my-auto transform scale-125"
            type="radio"
            name="view"
            value="Card View"
            checked={selectedView === "Card View"}
            onChange={handleViewChange}
          />
          <div className="title px-2">Card View</div>
        </label>

        <label className="flex radio p-2 cursor-pointer">
          <input
            className="my-auto transform scale-125"
            type="radio"
            name="view"
            value="Compact View"
            checked={selectedView === "Compact View"}
            onChange={handleViewChange}
          />
          <div className="title px-2">Compact View</div>
        </label>
      </div>
    </div>
  );
}

export default Settings;
