# Cinematic Literary Multiverse

## Retained project

Next.js 15 App Router, React 19, TypeScript, GSAP and ScrollTrigger; static export to `out/`; existing independent Sites identity and Vercel configuration. No additional JavaScript dependency, video, WebGL or 3D runtime was introduced.

The audit covered the routes, shared components, book data, commerce configuration, article template, author copy, local images, metadata and deployment manifest. All five books remain at their existing URLs. Original source code and publication artifacts remain in Git history.

## Content inventory

| Title | Existing verified shelf | Visual world |
| --- | --- | --- |
| White Elephant Gypsies | Memoir & military history | 01 — archival olive, paper, documentary framing |
| Sorrows’ Edge | Science fiction | 02 — navy, restrained stars, distant atmospheric light |
| The Curse of Tecumseh | Short stories; subtitle retained | 03 — forest green, antique texture, italic literary title |
| The Adventures of Melvin Entwistle | Science fiction | 04 — warm technical atmosphere and amber accents |
| Curing Marxism | Political nonfiction | 05 — restrained charcoal, parchment and editorial lines |

Every cover, the authentic author portrait and the existing illustrative landscape remain locally bundled. No decorative historical photograph is presented as evidence from a book. World numbering and mood labels are design navigation, not new publication claims.

The full existing editorial synopses, author biography, three attributed testimonial excerpts and all page metadata are preserved. The journal has no approved entries and retains its honest empty state. No ISBNs, dates, edition formats, current prices or retailer URLs are supplied. All commerce entries therefore retain their unverified availability states. The independent Contact form remains disabled until an approved email is configured; it does not post to the original site.

## Visual and motion system

Ink `#101317`, secondary charcoal `#252C32`, warm gold `#D4BA8A`, ivory `#F1ECE2`, muted green `#75837A`. Cormorant Garamond and Manrope remain; DM Mono provides metadata. Main reading copy remains approximately 17–19px, with visible focus styles and appropriately sized controls.

The home opening introduces the author, accessible line-split brand typography and an authentic featured volume. Portrait-led biography precedes differently scaled publications, genre navigation, existing author interests, real testimonials, an unfilled journal and the closing invitation. Genre pages introduce the cover and accurate metadata before the complete synopsis, purchasing availability and related works.

GSAP contexts use reduced-motion matchMedia and revert on route changes. The opening completes in about 1.5 seconds without blocking interaction. Selected media uses masks; desktop cover motion and the science-fiction atmosphere move only within small ranges. Mobile omits continuous atmospheric motion and parallax. Normal document scrolling is preserved.

## Maintenance

`src/data/worlds.ts` controls only genre presentation and world labels. `src/data/books.ts` remains the source of book copy. `src/data/commerce.ts` remains the only purchase configuration. `src/app/worlds.css` scopes the cinematic presentation over the retained shared styles. Original-domain links remain prohibited by the export audit.

Run `pnpm build` and `node scripts/audit-export.mjs` before publication. Read QA.md for actual checks and measurement limitations.
