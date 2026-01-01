import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jafaraziz.com",
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
