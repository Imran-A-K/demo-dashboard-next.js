"use client";
import React, { useEffect } from "react";

function Page() {
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return (
    <div>
      <h1>test page</h1>
      <button className="bg-teal-400">button</button>
    </div>
  );
}

export default Page;
