"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { redirect } from "next/navigation";
function Page() {
  const router = useRouter();
  redirect("/dashboard/doctors");
  // console.log(router);
  // console.log(router);

  // console.log("Navigation", Navigation);
  // console.log("props", props);
  // router.push("/dashboard/doctors");
  // router.replace("/dashboard/doctors");
  // useEffect(redirect("/dashboard/doctors"), []);
  return null;
}

export default Page;
{
  /* <div className="h-screen z-50 flex justify-center items-start pt-6">
<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
</div> */
}
