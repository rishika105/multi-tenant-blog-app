"use client"
import { useRouter } from "next/navigation"; // For App Router

export default function Home() {
  const router = useRouter();

  const functionRedirect = () => {
    router.replace("home");
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* protect this route can also do by using clerk middleware */}
      LETS SEE IF WE SEE IN PREV PAGE OR NOT
      <button onClick={functionRedirect} className="border cursor-pointer p-3 bg-fuchsia-300 text-black">Redirect to see magic</button>
    </div>
  );
}
