"use client";
import * as React from "react";
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";

export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const selectedOrg = useOrganization(); //retrives att of curr active org

  if (!selectedOrg.organization?.id) return;

  const handleCreateBlog = async () => {
    await createBlog({
      body: blogContent.trim(),
      orgId: selectedOrg.organization?.id,
      title: title,
    });
  };

  return (
    <div className="font-sans mt-10 overflow-hidden items-center justify-center flex flex-col gap-4">
      <label htmlFor="title" className="text-left">
        Title
      </label>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-gray-700 border-2 rounded-md p-2"
        placeholder="enter title"
      />
      <label htmlFor="blogContent" className="text-left">
        Add Content
      </label>
      <textarea
        value={blogContent}
        name="blogContent"
        onChange={(e) => setBlogContent(e.target.value)}
        placeholder="Enter your content"
        className="font-sans w-[50%] border-gray-700 border-2 p-3 rounded-md text-white"
      ></textarea>
      <button
        className="border border-gray-600 p-3 bg-zinc-900 rounded-md w-fit"
        onClick={handleCreateBlog}
      >
        Create Blog
      </button>
    </div>
  );
}
