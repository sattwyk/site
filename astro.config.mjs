import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import mathGrammar from "./src/lib/math-grammar.mjs";

export default defineConfig({
  site: "https://sattwyk.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      langs: [mathGrammar],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
