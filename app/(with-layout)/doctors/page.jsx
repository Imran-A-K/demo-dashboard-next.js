"use client";
import TitleSectionWithButton from "@/components/TitleSectionWithButton/TitleSectionWithButton";

function page() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      type: "Cardiologist",
      experience: 15,
      location: "New York",
    },
    {
      id: 2,
      name: "Dr. Emily Johnson",
      type: "Dermatologist",
      experience: 10,
      location: "Los Angeles",
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      type: "Orthopedic Surgeon",
      experience: 12,
      location: "Chicago",
    },
    {
      id: 4,
      name: "Dr. Sarah Williams",
      type: "Pediatrician",
      experience: 8,
      location: "Houston",
    },
    {
      id: 5,
      name: "Dr. Jessica Chen",
      type: "Obstetrician",
      experience: 14,
      location: "San Francisco",
    },
    {
      id: 6,
      name: "Dr. Robert Johnson",
      type: "Neurologist",
      experience: 18,
      location: "Boston",
    },
    {
      id: 7,
      name: "Dr. Karen Anderson",
      type: "Oncologist",
      experience: 20,
      location: "Seattle",
    },
    {
      id: 8,
      name: "Dr. David Kim",
      type: "Gastroenterologist",
      experience: 9,
      location: "Miami",
    },
    {
      id: 9,
      name: "Dr. Jennifer Lee",
      type: "Psychiatrist",
      experience: 11,
      location: "Washington D.C.",
    },
    {
      id: 10,
      name: "Dr. Lisa Miller",
      type: "Allergist",
      experience: 7,
      location: "Denver",
    },
  ];
  const doctorTypes = [
    "All",
    ...doctors.slice(0, 3).map((doctor) => doctor.type),
  ];

  // console.log("🚀 ~ file: page.jsx:78 ~ page ~ doctorTypes:", doctorTypes);

  const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4`,
    TdStyle: `border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark`,
    TdButton: `inline-block px-6 py-2 border rounded border-primary text-primary hover:bg-primary hover:text-white`,
  };

  const Table = () => {
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
  };

  return (
    <section className="px-10">
      <TitleSectionWithButton />
      <Table />
    </section>
  );
}

export default page;
