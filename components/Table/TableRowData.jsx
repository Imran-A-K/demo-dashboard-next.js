function TableRowData({ data }) {
  return (
    <tr key={data.id} className="text-center">
      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
        {data.name}
      </td>
      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
        {data.type}
      </td>
      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
        {data.experience}
      </td>
      <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
        {data.location}
      </td>
    </tr>
  );
}

export default TableRowData;
