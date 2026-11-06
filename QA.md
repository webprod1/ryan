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

## Cinematic Literary Multiverse — November 6, 2026

- Audited and retained the existing Next.js App Router, TypeScript, GSAP, static export and independent Sites deployment. No framework migration or additional JavaScript dependency.
- All 13 original public URLs export successfully. The export audit passes 243 internal link placements, 17 image placements, one H1 per route, canonical metadata, JSON-LD, sitemap and robots. Original-domain references remain prohibited.
- Compared the previous export with the new export: all original main-content copy tokens and image sources remain present on their respective routes; page titles, descriptions and canonicals are unchanged. Book data, commerce data and the independent Contact component were retained.
- Browser checks passed on all 13 routes at 320 × 740, 390 × 844, 820 × 1180 and 1440 × 1000 (52 checks), with no horizontal overflow, missing main landmark, duplicate H1 or failed loaded image. No browser warnings/errors were captured.
- All five book filters return the correct results. The mobile menu opens and Escape closes it from the toggle. The book-story anchor reaches the full synopsis and the existing disabled purchase state. Direct book URLs were tested.
- Visually inspected the desktop cover-led home, archival memoir, cosmic science-fiction page, forest short-story page, tablet story/purchase section and mobile opening. Readable body type remains approximately 17–19px.
- No original-domain navigation or redirect was introduced. Images are locally bundled. No books, reviews, articles, prices, ISBNs, edition data or author claims were invented. Decorative CSS atmosphere is not represented as historical documentation.
- GSAP contexts and reduced-motion handling were reviewed in source. Mobile omits continuous atmospheric motion/parallax. No formal Lighthouse/Core Web Vitals measurement, assistive-technology certification, OS preference change or real-device benchmark was performed.
- Official retailer/Share & Sell URLs and an approved contact email are still owner-supplied setup items. No live purchase or email delivery is claimed.
