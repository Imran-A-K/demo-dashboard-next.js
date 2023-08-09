"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
function Page() {
  useEffect(() => {
    redirect("/dashboard/doctors");
  }, []);

  return (
    <div className="h-screen z-50 flex justify-center items-start pt-24">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default Page;
