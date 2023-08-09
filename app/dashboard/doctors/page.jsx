"use client";
import DoctorCard from "@/components/Card/DoctorCard";
import Table from "@/components/Table/Table";
import Tabs from "@/components/Tabs/Tabs";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function Doctors({ searchParams }) {
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
      type: "Cardiologist",
      experience: 8,
      location: "Houston",
    },
    {
      id: 5,
      name: "Dr. Jessica Chen",
      type: "Orthopedic Surgeon",
      experience: 14,
      location: "San Francisco",
    },
    {
      id: 6,
      name: "Dr. Robert Johnson",
      type: "Dermatologist",
      experience: 18,
      location: "Boston",
    },
    // {
    //   id: 7,
    //   name: "Dr. Karen Anderson",
    //   type: "Oncologist",
    //   experience: 20,
    //   location: "Seattle",
    // },
    // {
    //   id: 8,
    //   name: "Dr. David Kim",
    //   type: "Gastroenterologist",
    //   experience: 9,
    //   location: "Miami",
    // },
    // {
    //   id: 9,
    //   name: "Dr. Jennifer Lee",
    //   type: "Psychiatrist",
    //   experience: 11,
    //   location: "Washington D.C.",
    // },
    // {
    //   id: 10,
    //   name: "Dr. Lisa Miller",
    //   type: "Allergist",
    //   experience: 7,
    //   location: "Denver",
    // },
  ];
  const doctorTypes = [
    "All",
    ...doctors.slice(0, 3).map((doctor) => doctor.type),
  ];
  const initialFilteredData = (activeTab) =>
    activeTab === "All"
      ? [...doctors]
      : doctors.filter((doctor) => doctor.type === activeTab);
  const router = useRouter();
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState(
    !!searchParams?.tab ? searchParams?.tab : doctorTypes[0]
  );
  const [filteredData, setFilteredData] = useState(
    !!searchParams?.tab ? initialFilteredData(searchParams?.tab) : [...doctors]
  );
  const changeTab = (tab) => {
    setActiveTab(tab);
    if (tab === "All") {
      setFilteredData(doctors);
    } else {
      const filtered = doctors.filter((doctor) => doctor.type === tab);
      setFilteredData(filtered);
    }
    router.replace(`${pathName}?tab=${tab}`);
  };

  return (
    <section className="sm:px-10">
      <Tabs activeTab={activeTab} tabs={doctorTypes} changeTab={changeTab} />
      <div className="max-sm:hidden">
        <Table tableData={filteredData} mainData={doctors} />
      </div>

      <div className="sm:hidden">
        {filteredData.map((data, index) => (
          <DoctorCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default Doctors;
