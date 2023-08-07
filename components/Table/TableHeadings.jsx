"use client";
function TableHeadings({ tableHeadings }) {
  return (
    <tr>
      {tableHeadings.map((heading, index) => (
        <th
          key={index}
          className="w-1/6 border-l border-transparent py-2 px-3 text-lg font-semibold text-white lg:py-2 lg:px-4"
        >
          {heading}
        </th>
      ))}
    </tr>
  );
}

export default TableHeadings;
