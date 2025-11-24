/** @type {import("lint-staged").Config} */
const config = {
  "*.{js,jsx,ts,tsx,astro,cjs,mjs}": ["pnpm exec eslint --fix", "pnpm exec prettier --write"],
  "*.{css,md,mdx,json}": "pnpm exec prettier --write",
};

export default config;
