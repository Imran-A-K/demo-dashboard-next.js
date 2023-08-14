"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableView from "./components/TableView";
import CardView from "./components/CardView";
import CompactView from "./components/CompactView";

function CheckView() {
  // const [preferredView, setPreferredView] = useState("Table View")

  const { data, isLoading } = useQuery({
    queryKey: ["Api-Data"],
    queryFn: async () => {
      const response = await axios.get(
        "https://64d756d42a017531bc1326ee.mockapi.io/customers"
      );
      const preferredView = localStorage.getItem("viewPreference");
      return { apiData: response.data, preferredView };
    },
  });
  // useEffect(() => {
  //   const viewPreference =  localStorage.getItem("viewPreference")
  //   !!viewPreference && viewPreference !== "Table View" && setPreferredView(viewPreference)
  // }, []);
  // console.log(data);
  return (
    <div>
      <h2 className="text-center py-4 font-semibold">
        Choosen View : {isLoading ? "Loading View" : data.preferredView}
      </h2>
      {isLoading ? null : (
        <>
          {data.preferredView === "Table View" && (
            <TableView data={data.apiData} />
          )}
          {data.preferredView === "Card View" && (
            <CardView data={data.apiData} />
          )}
          {data.preferredView === "Compact View" && (
            <CompactView data={data.apiData} />
          )}
        </>
      )}
    </div>
  );
}

export default CheckView;
