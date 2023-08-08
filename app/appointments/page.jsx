import AppointmentCard from "@/components/Card/AppointmentCard";
import DoctorCard from "@/components/Card/DoctorCard";
import Table from "@/components/Table/Table";
import React from "react";

function page() {
  const patientDetails = [
    {
      id: 1,
      name: "John Doe",
      doctor: "Dr. Smith",
      date: "2023-08-08",
      time: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      doctor: "Dr. Johnson",
      date: "2023-08-09",
      time: "02:30 PM",
    },
    {
      id: 3,
      name: "Michael Brown",
      doctor: "Dr. Williams",
      date: "2023-08-10",
      time: "11:15 AM",
    },
    {
      id: 4,
      name: "Emily Johnson",
      doctor: "Dr. Davis",
      date: "2023-08-11",
      time: "09:45 AM",
    },
    {
      id: 5,
      name: "William Anderson",
      doctor: "Dr. Martinez",
      date: "2023-08-12",
      time: "03:00 PM",
    },
  ];

  return (
    <section className="sm:px-10">
      <Table tableData={patientDetails} mainData={patientDetails} />
      <div className="sm:hidden">
        {patientDetails.map((data, index) => (
          <AppointmentCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
}

export default page;
