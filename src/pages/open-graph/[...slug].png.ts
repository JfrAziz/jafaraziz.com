import { SITE } from "config";
import generateOgImage, { type OgData } from "@utils/openGraph";
import { getAllTags, getLatestPosts, modifySlug } from "@utils/blog";
import type { APIRoute, GetStaticPaths, GetStaticPathsItem } from "astro";

interface StaticPaths extends OgData {
  slug: string;
}

const STATIC_PATH: StaticPaths[] = [
  {
    slug: SITE.title,
    title: `${SITE.title} : Blog and Project showcase`,
    date: new Date(),
  },
  {
    slug: "blog",
    title: "Blogs: I was there when it was written",
    date: new Date(),
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const result: GetStaticPathsItem[] = [];

  // static path
  STATIC_PATH.forEach(item =>
    result.push({
      params: { slug: item.slug },
      props: {
        title: item.title,
        date: item.date,
      },
    })
  );

  // blog
  const blogs = await getLatestPosts();

  blogs.forEach(blog =>
    result.push({
      params: { slug: `blog/${modifySlug(blog.slug)}` },
      props: {
        title: blog.data.title,
        date: blog.data.date,
      },
    })
  );

  // tags
  const blogTags = await getAllTags();

  blogTags.forEach(tag =>
    result.push({
      params: { slug: `tags/${tag}` },
      props: {
        title: `Showing all contents from "${tag}"`,
        date: new Date(),
      },
    })
  );

  return result;
};

export const GET: APIRoute<OgData> = async ({ props }) => {
  const response = await generateOgImage(props.title, props.date);
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
