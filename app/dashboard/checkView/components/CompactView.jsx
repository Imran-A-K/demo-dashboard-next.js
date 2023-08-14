import Link from "next/link";
import React from "react";

function CompactView({ data }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((dataUnit) => (
        <div
          key={dataUnit.id}
          className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 sm:text-xl">
                {dataUnit.company}
              </h3>

              {/* <p className="mt-1 text-xs font-medium text-gray-600">
                — {dataUnit.country}
              </p> */}
            </div>

            <div className="hidden sm:block sm:shrink-0">
              <img
                src={dataUnit.companyImage}
                className="h-16 w-16 rounded-lg object-cover shadow-sm"
                alt={dataUnit.companyName}
              />
            </div>
          </div>

          {/* <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
              illum provident a, ipsa maiores deleniti consectetur nobis et
              eaque.
            </p>
          </div> */}

          <dl className="pt-2 flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-1">
              <dt className="text-sm font-medium text-gray-600">Phone : </dt>
              <dd className="text-xs text-gray-500">{dataUnit.phone}</dd>
            </div>

            <div className="flex items-center gap-1">
              <dt className="text-sm font-medium text-gray-600">Email :</dt>
              <dd className="text-xs text-gray-500">{dataUnit.email}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default CompactView;
