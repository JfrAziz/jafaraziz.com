import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, sharpImageService } from "astro/config";

export default defineConfig({
	vite: { plugins: [tailwindcss()] },
	compressHTML: true,
	image: {
		service: sharpImageService(),
	},
	site: "https://jafaraziz.com",
	markdown: {
		gfm: true,
		shikiConfig: {
			theme: "github-light",
		},
	},
	integrations: [
		icon(),
		sitemap(),
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "github-light" },
		}),
	],
});
