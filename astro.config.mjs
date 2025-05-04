// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  integrations: [mdx()],
  site: "https://franciu89.github.io",
  base: "/travel-plans",
  trailingSlash: "ignore",
});
