"use client";
import { useOrganization } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";


// For App Router

export default function Dashboard() {
  const selectedOrg = useOrganization();
  const router = useRouter();
  if (!selectedOrg.organization?.id) return null;

  const handleRedirect = () => {
    router.push(`http://${selectedOrg.organization?.slug}.localhost:3000`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Protect route individually
        <SignedIn>
        <h1>Welcome to Dashboard</h1>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut> */}
      {/* protect this route can also do by using clerk middleware */}
      <h1 className="text-xl font-semibold p-4 mt-7 flex">
        {" "}
        DASHBOARD
      </h1>

      <button
        className="border border-gray-500 p-3 bg-zinc-900 rounded-md"
        onClick={handleRedirect}
      >
        Go to current oragnizations blogs
      </button>
    </div>
  );
}
