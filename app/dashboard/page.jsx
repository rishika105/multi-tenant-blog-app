"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
  // For App Router

export default function Home() {
  const router = useRouter();


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Protect route individually
        <SignedIn>
        <h1>Welcome to Dashboard</h1>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut> */}
      {/* protect this route can also do by using clerk middleware */}
      DASHBOARD
      <Button>Click me</Button>
    </div>
  );
}
