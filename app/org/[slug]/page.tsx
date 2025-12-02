"use client";
import * as React from "react";
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const selectedOrg = useOrganization();
  const router = useRouter();

  if (!selectedOrg.organization?.id) return null;

  const handleCreateBlog = async () => {
    await createBlog({
      body: blogContent.trim(),
      orgId: selectedOrg.organization?.id,
      title,
    });

    // Redirect to blog listing of this org
    //Ex: http://blogilite-1764436657.localhost:3000/
    router.push(`http://${selectedOrg.organization?.slug}.localhost:3000/`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-8 bg-[#0f0f11] border border-white/10 rounded-xl shadow-lg text-white flex flex-col gap-5">

      <h2 className="text-3xl font-bold mb-3">Create New Blog</h2>

      <div className="flex flex-col gap-2">
        <label className="opacity-80">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-black/40 p-3 rounded-lg border border-white/20 focus:border-purple-500 outline-none"
          placeholder="Enter blog title"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="opacity-80">Content</label>
        <textarea
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          className="bg-black/40 p-3 rounded-lg border border-white/20 min-h-[150px] focus:border-purple-500 outline-none"
          placeholder="Write your content here..."
        />
      </div>

      <button
        onClick={handleCreateBlog}
        className="px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition mt-2 w-fit"
      >
        Create Blog
      </button>
    </div>
  );
}
