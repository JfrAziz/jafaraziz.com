import { blogSchema } from "./_schemas";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  blog: blog
};
