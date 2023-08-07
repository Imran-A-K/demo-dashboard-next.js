"use client";

function Table({ tableData, doctors }) {
  const tableHeadings = Object.keys(doctors[0])?.filter(
    (keepFields) => keepFields !== "id"
  );
  //   console.log(tableHeadings);

  return (
    <article className="max-sm:hidden">
      <div className="flex flex-wrap">
        <div className="w-full ">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead className=" bg-blue-500">
                <tr>
                  {tableHeadings.map((heading, index) => (
                    <th
                      key={index}
                      className="w-1/6 capitalize border-l border-transparent py-2 px-3 text-lg font-semibold text-white lg:py-2 lg:px-4"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tableData.map((data) => (
                  <tr key={data.id} className="text-left">
                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-5 text-base font-medium text-dark">
                      {data.name}
                    </td>
                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-5  text-base font-medium text-dark">
                      {data.type}
                    </td>
                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-5  text-base font-medium text-dark">
                      {data.experience}
                    </td>
                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-5  text-base font-medium text-dark">
                      {data.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Table;
