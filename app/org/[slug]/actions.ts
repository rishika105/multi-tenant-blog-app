"use server";

import { db } from "@/db";
import { blogTable, CreateBlogType } from "@/db/schema";

//server function to create blog
export const createBlog = async(payload: CreateBlogType) => {
  const result = await db.insert(blogTable).values(payload)
    return result;
}