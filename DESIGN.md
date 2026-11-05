# The Living Manuscript

## Audit and scope

The retained codebase uses Next.js 15 App Router, TypeScript, React 19, plain CSS, GSAP and ScrollTrigger, with a static export. The audit covered every source component, the 13 public pages, the dormant article template, local assets, metadata, filtering, contact behavior and commerce configuration. No framework or dependency changes were needed.

The original presentation used a full-background photographic hero, navy sections, paired image/text blocks, repeated cover stages, a three-column testimonial row and frequent fade-up reveals. This revision changes presentation and motion while retaining factual content, destinations, availability states and all original images. Commerce, contact logic, data modules and article publication logic remain intact.

## Editorial system

- Ink `#161715`, warm paper `#EAE5DA`, soft ivory `#F7F4EC`, muted olive `#777B65`, aged burgundy `#713D43`.
- Cormorant Garamond display typography and Manrope body type. Burgundy carries signatures and editorial emphasis. Darker olive is used for small text to maintain contrast.
- Double-rule masthead, an interlocked typographic monogram, numbered navigation and an active-page underline.
- Opening spread with an offset signature and a masked, inset photographic plate. The original landscape remains illustrative rather than biographical.
- Differently scaled publications, an annotated portrait, a linear dark chapter index, oversized quotations and a restrained colophon. No added factual sections or articles.
- Distinct layouts for biography, book index, book details, reviews, journal, contact and legal reading pages.
- Subtle tiled SVG grain is generated in CSS; it adds no fetched image or dependency.

## Motion and responsive behavior

The opening choreography completes in approximately 1.5 seconds without blocking navigation. Selected images reveal through clipping. Headings use a directional mask rather than repeated fade-up effects. Desktop imagery has a small parallax range; mobile omits it. A section rule follows normal scrolling. GSAP matchMedia contexts revert on route changes and unmount; reduced motion skips the animation setup and disables CSS motion.

On mobile the photographic plate moves below the signature, labels sit in the margin, the author feature becomes a portrait-led sequence, and the publication layout shifts to an inset reading flow. Tablet uses its own type scale and chapter layout. Navigation has larger mobile targets and supports Escape from both the toggle and links.

## Preservation verification

`scripts/audit-preservation.mjs` compares an earlier production export against the new export for visible main copy tokens, all link destinations, image placements, descriptions, Open Graph text and canonicals. `scripts/audit-export.mjs` verifies the current export independently. See QA.md for browser checks and verification boundaries.
