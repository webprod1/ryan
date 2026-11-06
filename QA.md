# Verification record

November 5, 2026. This is an independent project; source-site access consisted only of public read-only content and image requests. No original repository, backend, hosting, DNS or domain settings were accessed or changed.

## Passed

- Next.js optimized production compilation and TypeScript validation.
- All 13 public routes exported: home, about, books, five individual books, reviews, journal, contact, privacy and terms.
- Automated export audit: 215 internal link placements, 15 image placements, canonical metadata, one H1 per public page, parseable JSON-LD, sitemap, robots and custom 404. No internal broken paths. No original-domain canonicals.
- All 13 routes loaded in the production static preview at 390 × 844 with no horizontal overflow. Narrow-mobile book detail checked at 320 × 740. Tablet biography and book gallery checked at 820 × 1180. Desktop home checked at 1440 × 1000, with a complete, nonblocking entrance.
- Mobile menu opens, closes on route navigation and exposes expanded state. Genre filter changes from five works to the two verified science-fiction titles. Book detail shows disabled purchasing and a contact alternative.
- Book covers and portrait downloaded from the author’s source asset URLs. Titles, synopsis themes, biography and review attributions checked against the source pages recorded in CONTENT-SOURCES.md.
- Source review: skip link, semantic main/navigation/footer, visible focus styles, labelled controls, image alt text, active-page state, reduced-motion media query, GSAP scoped cleanup and no scroll-jacking. Book gallery hierarchy includes a descriptive H2.
- No invented journal articles. The article template is retained outside the live routes until authentic content is supplied.

## Boundaries and owner setup

- There are no supplied, verified IngramSpark Share & Sell links, edition details, ISBNs or current prices. No live checkout can be tested. All five purchasing states remain disabled and clearly explained. Only HTTPS configured destinations can become links; the owner must verify the exact title and format before enabling them.
- No direct author email was supplied. The contact page displays its own disabled form with an availability notice until the author provides an email address. It has no link or submission to the original website. An optional public contact address enables a validated local email composer. Actual email delivery was not tested or claimed.
- No formal Lighthouse/Core Web Vitals measurement, automated accessibility certification, assistive-technology session, or real-device performance benchmark was performed. Accessibility and animation review combines source inspection with browser interaction and responsive screenshots.
- Reduced-motion handling and cleanup were reviewed in source; OS-level motion preference was not changed during QA.
- The original low-resolution portrait and photographed Sorrows’ Edge cover are authentic. Higher-resolution owner originals are recommended.
- Legal notices describe the implemented site and need owner review before public launch.

Reproduce the export audit with `pnpm build` followed by `node scripts/audit-export.mjs`.

## Independent-site link cleanup

Removed the Reviews page’s original-site link and unused original-domain URL fields from book data. All images remain locally bundled. The export audit rejects any reference to the original author domain in public page output. Offline research provenance remains in CONTENT-SOURCES.md only. The Contact page retains its own disabled form until an author email is supplied.
