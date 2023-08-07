"use client";

import TableHeadings from "./TableHeadings";

function Table({ tableData, tableHeadingType }) {
  const tableHeadings = [
    "All",
    ...tableData.slice(0, 3).map((data) => tableData[tableHeadingType]),
  ];
  return (
    <section className="">
      <div className="">
        <div className="flex flex-wrap">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="text-center bg-blue-500">
                  <tr>
                    <th className="w-1/6 border-l border-transparent py-2 px-3 text-lg font-semibold text-white lg:py-2 lg:px-4">
                      {" "}
                      Name{" "}
                    </th>
                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-2 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      {" "}
                      Type{" "}
                    </th>
                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-2 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      {" "}
                      Experience{" "}
                    </th>
                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-2 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      {" "}
                      Location{" "}
                    </th>
                  </tr>
                  <TableHeadings tableHeadings={tableHeadings} />
                </thead>

                <tbody>
                  {doctors.map((doctor) => (
                    <tr key={doctor.id} className="text-center">
                      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                        {doctor.name}
                      </td>
                      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                        {doctor.type}
                      </td>
                      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                        {doctor.experience}
                      </td>
                      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                        {doctor.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
