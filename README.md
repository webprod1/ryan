# Ryan L. Robinson — Beyond the Written World

A new, independent Next.js App Router + TypeScript author website. It does not use the original website’s code, backend, domain configuration or hosting. All source was created for this project. The hosted Sites deployment is owner-private by default.

## Local development

Requires Node.js 20.9+ and pnpm. Run `pnpm install`, copy `.env.example` to `.env.local`, then `pnpm dev`. `pnpm build` checks types and exports the production site to `out/`. `pnpm typecheck` runs a standalone TypeScript check. After a build, `node scripts/audit-export.mjs` checks every public route, internal link, image placement, canonical, JSON-LD block and purchase availability state.

## Independent GitHub / Vercel deployment

Create a new, empty GitHub repository. Push this project to that new repository; do not add the original website’s repository as a remote. Import the new repository into a new Vercel project. Build: `pnpm build`; output: `out`; framework: Next.js. Set `NEXT_PUBLIC_SITE_URL` to the new deployment’s HTTPS origin and rebuild so canonical URLs, structured data and sitemap match. No original domain or DNS changes are required. The `.openai/hosting.json` file belongs to this independent Sites deployment; remove it from a GitHub-only copy if desired.

The app uses static export. `next start` is not the production serving method for this configuration; serve `out/` with any static web host that supports directory indexes and a custom 404 page. No server secrets are required. Images are locally bundled; Next Image has static-export-compatible unoptimized mode. For a server deployment, remove `output: 'export'` and `images.unoptimized` to enable the image optimizer.

## Commerce configuration

Edit `src/data/commerce.ts`. Each book has an independent format array, availability state, optional ISBN, optional verified price/currency, official IngramSpark Share & Sell URL, and optional verified retailer links. Add one object per confirmed format. HTTPS is required. The URL must be supplied by the author’s authorized IngramSpark account or verified directly with the retailer. The code does not claim a URL is official just because it is HTTPS. Verify destination, title, edition and price manually before enabling it. Set availability to `available` only after verification. Prices, ISBNs, dates and formats are deliberately absent today. There is no cart, payment collection or fictional Ingram API. Never insert Ingram credentials in source or public environment variables.

Example shape (replace values with verified information before use):

```ts
{availability:'available',formats:[{label:'Confirmed edition',ingramPurchaseUrl:'OWNER_SUPPLIED_HTTPS_URL',retailerPurchaseUrls:[]}]}
```

## Content management

- `src/data/books.ts`: five titles, editorial descriptions, original source pages, local cover images, review excerpts and deployment origin.
- `src/data/articles.json`: only add owner-approved authentic articles. Each entry has a unique slug, title, ISO date, category, excerpt and paragraph array. The build validates entries and copies `templates/journal-article.tsx` into the App Router only when entries exist. Adding entries generates real article routes and updates the sitemap. Run `pnpm build` after adding content. There are no invented articles.
- `src/app/about/page.tsx`: source-grounded biography.
- `public/images/`: authentic source cover images and author portrait; atmospheric landscape is a separate illustrative photograph, not a photo of the author’s home or travels.
- `.env.local`: optional `NEXT_PUBLIC_CONTACT_EMAIL` enables a validated mail composer. Without it, the Contact page clearly links to the verified original contact form. No submission is silently discarded. Email composition requires the visitor’s email application; it is not an integrated mail-delivery service.

## Motion and accessibility

GSAP/ScrollTrigger runs in scoped matchMedia contexts and reverts on route changes/unmount. Reduced motion disables GSAP entrances and CSS transitions. Content is visible when JavaScript is absent. Keyboard navigation, skip link, semantic landmarks, current-page indicators, labelled inputs and an Escape-dismissible mobile menu are included. No scroll-jacking or artificial loading screen.

## Owner information still required

Official Share & Sell URLs per edition; verified format, ISBN and publication details; any current price; optional public contact email; approved journal entries. Review privacy/terms for the owner’s actual operating practices before public launch. The source portrait and some book artwork have limited resolution; higher resolution originals will improve large-display quality. See `CONTENT-SOURCES.md` and `QA.md`.
