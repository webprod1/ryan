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
- No direct author email was supplied. The contact page offers the verified existing public contact form in a clearly labelled external tab. It does not connect to the original backend or submit on the visitor’s behalf. An optional public contact address enables a validated local email composer. Actual email delivery was not tested or claimed.
- No formal Lighthouse/Core Web Vitals measurement, automated accessibility certification, assistive-technology session, or real-device performance benchmark was performed. Accessibility and animation review combines source inspection with browser interaction and responsive screenshots.
- Reduced-motion handling and cleanup were reviewed in source; OS-level motion preference was not changed during QA.
- The original low-resolution portrait and photographed Sorrows’ Edge cover are authentic. Higher-resolution owner originals are recommended.
- Legal notices describe the implemented site and need owner review before public launch.

Reproduce the export audit with `pnpm build` followed by `node scripts/audit-export.mjs`.

## The Living Manuscript redesign verification

The redesign retained the Next.js/TypeScript framework and existing dependencies. A comparison with the prior production export passes for all main-content copy tokens, image placements, navigation destinations, descriptions, Open Graph text and canonical URLs across all 13 public pages. The original commerce, contact and article data/logic were preserved.

The final optimized build passes compilation and TypeScript validation without CSS warnings. The export audit again passes 13 routes, 215 internal link placements and 15 image placements. Browser checks cover all 13 routes at 320 × 740, 390 × 844, 820 × 1180 and 1440 × 1000 (52 checks), with one H1, a main landmark, no horizontal overflow and no failed loaded images in each check. No browser errors or warnings were captured in the redesign preview.

All five genre filters return their expected results (5, 2, 1, 1 and 1 books). The mobile menu opens, closes with Escape from the toggle and closes on route navigation. Desktop opening, selected works and author feature; mobile opening and book index; and tablet reviews, journal and contact were visually inspected. Navigation targets and unavailable commerce states were preserved rather than replaced with new placeholder behavior.

Motion respects the existing reduced-motion policy, omits parallax on mobile and reverts scoped GSAP contexts on navigation. This was reviewed in source; no OS preference changes, formal Lighthouse measurement or accessibility certification were performed. The earlier owner setup requirements remain applicable.
