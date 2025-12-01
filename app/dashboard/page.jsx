"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
// For App Router

export default function Dashboard() {
  const router = useRouter();

  return (
    <div>
      {/* Protect route individually
        <SignedIn>
        <h1>Welcome to Dashboard</h1>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut> */}
      {/* protect this route can also do by using clerk middleware */}
      <h1 className="text-xl font-semibold justify-center p-4 items-center mt-7 flex">
        {" "}
        DASHBOARD
      </h1>

      <Link href="/org/:slug" className="border border-gray-500 p-3 bg-zinc-900 flex w-fit text-center items-center justify-center ml-[45vw] rounded-md">Go to organizations</Link>

    </div>
  );
}
