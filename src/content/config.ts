import { defineCollection } from "astro:content";
import { blogSchema } from "./_schemas";

const blog = defineCollection({
	type: "content",
	schema: blogSchema,
});

export const collections = {
	blog: blog,
};
