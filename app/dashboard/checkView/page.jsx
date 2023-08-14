"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableView from "./components/TableView";
import CardView from "./components/CardView";

function CheckView() {
  const { data, isLoading } = useQuery({
    queryKey: ["Api-Data"],
    queryFn: async () => {
      const response = await axios.get(
        "https://64d756d42a017531bc1326ee.mockapi.io/customers"
      );
      return response.data;
    },
  });
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const response = await axios.get(
  //       "https://64d756d42a017531bc1326ee.mockapi.io/customers"
  //     );
  //     setData(response.data);
  //   };
  //   fetch();
  // }, []);
  // console.log(data);
  return (
    <div>
      CheckView
      {isLoading ? "Loading" : <CardView data={data} />}
    </div>
  );
}

export default CheckView;
