import { z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()),
  date: z.coerce.date(),
  image: z.string().optional(),
});

export const projectSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  repository: z.string().url().optional(),
  description: z.string(),
  stacks: z.array(
    z.object({
      name: z.string(),
      link: z.string().url(),
    })
  ),
});

export type Project = z.infer<typeof projectSchema>;

export type BlogFronmatter = z.infer<typeof blogSchema>;
