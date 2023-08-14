import Link from "next/link";
import React from "react";

function CardView({ data }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((dataUnit) => (
        <div
          key={dataUnit.id}
          className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            className="rounded-t-lg"
            src={dataUnit.companyImage}
            alt={dataUnit.companyName}
          />

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              Company : {dataUnit.company}
            </h5>

            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Email : {dataUnit.email}
            </p>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Phone : {dataUnit.phone}
            </p>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Address : {dataUnit.companyAddress}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardView;
