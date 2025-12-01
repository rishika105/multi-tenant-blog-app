"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
// For App Router

export default function Dashboard() {
  const router = useRouter();
  const [blogContent, setBlogContent] = React.useState("");
  const [title, setTitle] = React.useState("");

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
      <h1 className="text-xl font-semibold justify-center p-4 items-center mt-0 flex">
        {" "}
        DASHBOARD
      </h1>

      <div className="font-sans mt-10 overflow-hidden items-center justify-center flex flex-col gap-4">
        <label htmlFor="title" className="text-left">Title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-gray-700 border-2 rounded-md p-2"
          placeholder="enter title"
        />
        <label htmlFor="blogContent" className="text-left">Add Content</label>
        <textarea
          value={blogContent}
          name="blogContent"
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Enter your content"
          className="font-sans w-[50%] border-gray-700 border-2 p-3 rounded-md text-white"
        ></textarea>
        <button className="border border-gray-600 p-3 bg-zinc-900 rounded-md w-fit">
          Create Blog
        </button>
      </div>
    </div>
  );
}
