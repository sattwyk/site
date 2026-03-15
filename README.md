# sattwyk.com

Personal site built with Astro, Tailwind CSS, and TypeScript.

## Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Run checks and create a production build:

```bash
pnpm build
```

Useful commands:

| Command            | Purpose                                   |
| :----------------- | :---------------------------------------- |
| `pnpm dev`         | Start the local Astro dev server          |
| `pnpm dev:network` | Start the dev server on the local network |
| `pnpm build`       | Run `astro check` and build the site      |
| `pnpm preview`     | Preview the production build locally      |
| `pnpm lint`        | Run ESLint                                |
| `pnpm format`      | Run Prettier across the repo              |

## Content

- Blog posts live in `src/content/blog`
- Projects live in `src/content/projects`
- Content collections are defined in `src/content.config.ts`

## Stack

- Astro
- Tailwind CSS
- TypeScript
- MDX

## License

MIT
