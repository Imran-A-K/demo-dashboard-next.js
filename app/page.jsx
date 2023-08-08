"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Dashboard() {
  const router = useRouter();
  // router.push("/doctors");
  // useEffect(router.push("/doctors"), []);
  return <div>Welcome</div>;
}

export default Dashboard;
{
  /* <div className="h-screen z-50 flex justify-center items-start pt-6">
<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
</div> */
}
