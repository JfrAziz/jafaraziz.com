import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()),
  date: z.coerce.date(),
  image: z.string().optional(),
});

export type BlogFronmatter = z.infer<typeof blogSchema>;

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  blog: blog,
};
