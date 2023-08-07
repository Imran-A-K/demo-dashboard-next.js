"use client";
import Table from "@/components/Table/Table";
import Tabs from "@/components/Tabs/Tabs";
import TitleSectionWithButton from "@/components/TitleSectionWithButton/TitleSectionWithButton";
import { useEffect, useState } from "react";

function Doctors() {
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

  const [activeTab, setActiveTab] = useState(doctorTypes[0]);
  const [filteredData, setFilteredData] = useState([...doctors]);

  return (
    <section className="sm:px-10">
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={doctorTypes}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        doctors={doctors}
      />
      <Table tableData={filteredData} doctors={doctors} />
    </section>
  );
}

export default Doctors;
