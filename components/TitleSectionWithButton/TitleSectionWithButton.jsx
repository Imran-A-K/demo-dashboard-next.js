import React from "react";
import PlusIcon from "../Icons/PlusIcon";

function TitleSectionWithButton({}) {
  return (
    <div className="flex justify-between items-center py-6">
      <h1 className="font-bold text-xl">Doctors</h1>
      <button className="flex items-center gap-2 bg-slate-200 rounded-md px-4 py-2">
        Add {PlusIcon}
      </button>
    </div>
  );
}

export default TitleSectionWithButton;
