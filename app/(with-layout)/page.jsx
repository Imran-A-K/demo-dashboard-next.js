"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Dashboard() {
  const router = useRouter();
  router.push("/doctors");
  // useEffect(router.push("/doctors"), []);
  return null;
}

export default Dashboard;
