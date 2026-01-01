import sharp from "sharp";
import { SITE } from "@/const";
import { readFile } from "node:fs/promises";
import satori, { type SatoriOptions } from "satori";
import { getLatestPosts, modifySlug } from "@/utils/blog";
import { Template } from "@/components/open-graph/template";
import type { APIRoute, GetStaticPaths, GetStaticPathsItem } from "astro";

const STATIC_PATH = [
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

const generateOgImage = async (
  text: string = SITE.title,
  date: Date = new Date(),
): Promise<Buffer> => {
  const options: SatoriOptions = {
    width: 600,
    height: 315,
    fonts: [
      {
        name: "JetBrainsMono",
        data: await readFile("./src/assets/font/JetBrainsMono-Bold.ttf"),
        weight: 600,
        style: "normal",
      },
      {
        name: "PlusJakartaSans",
        data: await readFile("./src/assets/font/PlusJakartaSans-Bold.ttf"),
        weight: 900,
        style: "normal",
      },
    ],
  };

  const svg = await satori(Template({ title: text, date: date }), options);

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result: GetStaticPathsItem[] = [];

  STATIC_PATH.map((item) =>
    result.push({
      params: { slug: `${item.slug}` },
      props: {
        title: item.title,
        date: item.date,
      },
    }),
  );

  const blogs = await getLatestPosts();

  blogs.map((blog) =>
    result.push({
      params: { slug: `blog/${modifySlug(blog.slug)}` },
      props: {
        title: blog.data.title,
        date: blog.data.date,
      },
    }),
  );

  return result;
};

export const GET: APIRoute = async ({ props }) => {
  const response = await generateOgImage(props.title, props.date);

  return new Response(response as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
