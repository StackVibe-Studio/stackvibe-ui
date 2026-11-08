# @stackvibe-studio/docs

The official documentation portal for StackVibe UI, showcasing 30 interactive components, design token guides, code snippets, and live theme customization.

## Architecture

- **Framework**: Next.js 15 (App Router) with static HTML export (`output: 'export'`).
- **Styling**: Tailwind CSS v4 with monorepo `@source` workspace resolution.
- **Components**: Live interactive previews utilizing `@stackvibe-studio/ui`, `@stackvibe-studio/motion`, and `@stackvibe-studio/three`.
- **Hosting**: GitHub Pages under `/stackvibe-ui/`.

## Development

```bash
# From workspace root
pnpm --filter @stackvibe-studio/docs dev

# Or directly in this directory
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the documentation.

## Production Build & Static Export

```bash
pnpm build
```

The static HTML bundle is generated in the `out/` directory, ready to be deployed to any static host (GitHub Pages, Cloudflare Pages, Vercel, Netlify, S3).

## Live Documentation

Explore the live documentation site at [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/).
