"use client";

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* protect this route */}
      <SignedIn>HOMEEEE</SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
