import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  experimental: {
    assets: true,
  },
  image: {
    service: "astro/assets/services/sharp",
  },
  site: "https://jafaraziz.com",
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: "github-light",
    },
  },
  integrations: [
    tailwind(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-light",
      },
    }),
    sitemap(),
    preact({
      compat: true,
    }),
  ],
});
