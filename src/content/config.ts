import { defineCollection } from "astro:content";
import { blogSchema, projectSchema } from "./_schemas";

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const project = defineCollection({
  type: "data",
  schema: projectSchema,
});

export const collections = {
  blog: blog,
  project: project,
};
