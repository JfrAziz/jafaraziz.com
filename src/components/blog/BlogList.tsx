import BlogItem from "./BlogItem";
import type { FC } from "preact/compat";
import type { CollectionEntry } from "astro:content";
import SectionHeader from "@components/layout/content/SectionHeader";

const BlogList: FC<{ posts: CollectionEntry<"blog">[] }> = ({ posts }) => (
  <div class="space-y-6">
    <SectionHeader title="Blog" description="Sorted by date" />
    <ul class="space-y-5">
      {posts.map(post => (
        <BlogItem slug={post.slug} {...post.data} />
      ))}
    </ul>
  </div>
);

export default BlogList;
