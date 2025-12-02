import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

interface Params {
  subdomain: string;
}

export default async function HomePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { subdomain } = await params;

  const client = await clerkClient();

  // --- Safe lookup ---
  let org;
  try {
    org = await client.organizations.getOrganization({ slug: subdomain });
  } catch (e) {
    // If no such organization → use Next.js 404
    return notFound();
  }

  // Still no org found? (edge case)
  if (!org) return notFound();

  //blogilite-1764436657 this is my slug or subdomain for organization
  //use in url
  //http://blogilite-1764436657.localhost:3000/
  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, org.id));

  return (
    <div className="p-6 text-white">
        
            <h2 className="font-bold text-center italic p-4">Blogs of the specific organization </h2>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="border border-white/10 bg-black/30 p-4 my-4 rounded-xl"
        >
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p className="opacity-80 mt-2">{blog.body}</p>
        </div>
      ))}
    </div>
  );
}
