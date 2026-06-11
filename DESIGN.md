---
name: Amrani Consulting
description: Freelance IT & IA consultant — Bruxelles. Clarté · Structure · Impact.
colors:
  navy: "#0A1626"
  navy-depth: "#0F1F33"
  navy-raised: "#15293F"
  gold: "#B08D57"
  gold-text: "#7C5A1E"
  gold-soft: "#D4B584"
  gold-dark: "#6B4D1A"
  cream: "#F4F1EB"
  cream-depth: "#EDE8DC"
  ink: "#1A1A1A"
  text-soft: "#4A5568"
  text-muted: "#6B7280"
  border: "#DCD5C2"
  border-soft: "#E5DFCD"
  success: "#2F855A"
  error: "#C53030"
typography:
  display:
    fontFamily: "Playfair Display, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Playfair Display, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Playfair Display, Times New Roman, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  mono-eyebrow:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  6: "24px"
  8: "32px"
  12: "48px"
  16: "64px"
  20: "80px"
  24: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.gold-dark}"
    textColor: "{colors.cream}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "15px 26px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    padding: "8px 0"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Amrani Consulting

## 1. Overview

**Creative North Star: "The Consulting Partner"**

This is the design language of someone who has done this before and doesn't need to prove it. Composed, strategic, and unhurried — every element signals competence through restraint rather than loudness. The palette is a midnight boardroom with one precise accent: gold that is never decorative but always intentional. Typography shifts registers deliberately: Playfair Display for gravitas, Inter for clarity, JetBrains Mono for the precision of a specialist.

The system is mobile-first and bilingual in register — it speaks to the PME owner who has five minutes and a business problem, not a developer reading a spec. Every page has one clear next step. Shadows appear only when they carry information. Motion is purposeful and calm; no bounce, no flourish.

What this system explicitly rejects: transactional freelance profiles (Fiverr/Malt grids, hourly-rate energy, star ratings), generic IT agency stock aesthetics (stock photos of handshakes, blue gradient heroes), and anything that signals "this was assembled from a template." Authority is conveyed through precision and composition, never through self-promotion.

**Key Characteristics:**
- Dark navy anchors the brand; cream is the reading surface; gold is a precision accent used sparingly
- Playfair Display italic for emphasis — the gold on dark, the italic on light
- Pill-radius CTAs, flat cards, grain overlay on navy sections
- Single clear CTA per section; no competing calls to action
- Reduced-motion alternative for every animation; accessibility-first throughout

## 2. Colors: The Midnight Brief Palette

Two anchors and one precision accent, no other hues admitted.

### Primary
- **Midnight Brief** (`#0A1626`): The brand's dominant surface. Used on the hero, nav (on scroll), CTA strips, and footer. Its depth signals authority without aggression.
- **Midnight Depth** (`#0F1F33`): Stacked surface on navy sections — card backgrounds within dark areas, subtle differentiation without contrast drama.
- **Midnight Raised** (`#15293F`): Third tier for gradients or hover states within dark sections.

### Secondary
- **Burnished Gold** (`#B08D57`): Decoration only — borders, the Λ monogram, button backgrounds, underline accents on nav hover. Never for body text on light backgrounds.
- **Ledger Gold** (`#7C5A1E`): Text-safe gold for use on cream/ivory backgrounds. Passes WCAG AA at 5.17:1 against `#F4F1EB`. This is the *only* gold variant permitted for text on light backgrounds.
- **Soft Gold** (`#D4B584`): Text-safe gold for use on navy backgrounds. Passes WCAG AA. Used for italic emphasis (`<em>`) in dark sections.
- **Gold Dark** (`#6B4D1A`): Hover state for gold-background buttons. Also used for ghost button hover.

### Neutral
- **Archive White** (`#F4F1EB`): The primary reading surface. Warm but not sand; 0 chroma, tilted to cream. Body background on all light-mode sections.
- **Archive Depth** (`#EDE8DC`): Stacked surface on light sections — alternate section backgrounds, input backgrounds.
- **Deep Ink** (`#1A1A1A`): Headings on light backgrounds.
- **Ink Soft** (`#4A5568`): Body paragraphs and supporting text. Not a pure gray — carries a faint blue-gray quality.
- **Ink Muted** (`#6B7280`): Secondary labels, metadata, helper text.
- **Border Warm** (`#DCD5C2`): Card borders, dividers, input strokes. Harmonized with the cream surface.

### Named Rules
**The One Voice Rule.** Gold appears on at most 10% of any given screen. A page where gold is everywhere has no gold at all. Its rarity is the message.

**The Safe-Gold Rule.** `#B08D57` (Burnished Gold) is decoration only — borders, icons, button backgrounds. For any gold text on a light background, use `#7C5A1E` (Ledger Gold) exclusively. The contrast failure at `#B08D57` on cream is 2.8:1 — prohibited.

## 3. Typography

**Display Font:** Playfair Display (400–600, italic variants essential)  
**Body Font:** Inter (400, 500, 600)  
**Label/Mono Font:** JetBrains Mono (400, 500)

**Character:** A deliberate tension between the permanence of serif authority and the precision of a modern sans. Playfair italic signals emphasis and personality — it is the voice; Inter handles the information. The mono carries the eyebrow label system: it reads like a file stamp, not a headline.

### Hierarchy
- **Display** (Playfair 400, clamp 2.75rem→4.5rem, line-height 1.08, tracking −0.015em): Hero headings and page titles only. The maximum is 4.5rem (72px) — above that, the page shouts.
- **Headline** (Playfair 500, clamp 2.25rem→3rem, line-height 1.08): Section headings (h2). One per major section.
- **Title** (Playfair 500, clamp 1.75rem→2.25rem, line-height 1.08): Sub-section headings (h3), card titles.
- **Body** (Inter 400, 17px, line-height 1.6): Paragraphs. Max line length 68ch — enforced in CSS via `max-width: 68ch`. Color is `#4A5568` (Ink Soft) on light backgrounds.
- **Label** (Inter 500, 15px, line-height 1.4): UI labels, button text, metadata.
- **Mono Eyebrow** (JetBrains Mono 500, 13px, uppercase, tracking 0.16em): Section kickers. Used sparingly — one deliberate eyebrow per section, not a reflexive scaffold on every heading.

### Named Rules
**The Italic Accent Rule.** `<em>` elements inherit Playfair Display italic automatically. On light sections, they render in Ledger Gold (`#7C5A1E`). On dark sections, in Soft Gold (`#D4B584`). This is the primary typographic signal for proper names, specialist terms, and the brand's own taglines. It is not for generic emphasis.

**The Mono Signal Rule.** JetBrains Mono appears only in the eyebrow/overline context. It never appears in body copy or headings. Its specific character — monospaced, technical — signals that what follows is a label or category, not prose.

## 4. Elevation

Flat by default. Surfaces do not cast shadows at rest; the reading experience is clean and documents-like. Depth is conveyed through background-color stacking (navy tiers, cream tiers) and the grain overlay on dark sections, not through shadow.

Shadows appear only as a response to **state or promotion**: hover lifts a button, a sticky header gains a border on scroll, a CTA strip gains the gold glow.

**The Grain Truth.** Navy sections carry a subtle SVG fractalNoise grain overlay at 50% opacity, `mix-blend-mode: overlay`. This is the only textural treatment in the system. It adds warmth without adding noise to the reading experience.

### Shadow Vocabulary
- **Ambient** (`0 1px 2px rgba(10, 25, 41, 0.05)`): Barely perceptible. Applied to low-level card states when differentiation is needed.
- **Card** (`0 4px 16px rgba(10, 25, 41, 0.08)`): The default shadow-at-rest for cards that require visual lift. Used sparingly.
- **Elevated** (`0 24px 48px -12px rgba(10, 25, 41, 0.18)`): Modals, dropdowns, overlays that genuinely float above the page.
- **Gold Glow** (`0 8px 24px rgba(176, 141, 87, 0.25)`): The primary CTA button on hover. The gold glow is a brand signal, not a generic elevation pattern.

### Named Rules
**The Flat-by-Default Rule.** At rest, all surfaces are flat. The first shadow the eye encounters should be in a hover or focus state — never on an inert card in a grid. If everything casts a shadow, nothing is elevated.

## 5. Components

### Buttons
Pill-radius shapes throughout — the full curvature signals a premium, modern consulting aesthetic, not a hard-edged enterprise tool.
- **Shape:** Full pill (`border-radius: 999px`). No exceptions; no rounded-md for secondary buttons.
- **Primary:** Gold fill (`#B08D57`) + navy text (`#0A1626`), 15px/26px padding, Inter 500 15px. On hover: darkens to `#6B4D1A` fill + cream text, lifts 2px, gold glow.
- **Outline:** Transparent fill, navy border + text. On hover: navy fill + cream text, lifts 2px. On dark backgrounds: cream border/text → cream fill + navy text on hover.
- **Ghost:** No fill, no border. Bottom border 1px on the text itself (not a box border). Used for inline navigation-adjacent CTAs. On hover: text shifts to Ledger Gold.
- **Arrow motif:** Buttons carry a trailing `→` that slides 4px right on hover via `translateX`. This is a brand signature, not optional.
- **Compact (`btn-sm`):** Same shapes at 70% padding and 13px type. Used in the header CTA cluster only.

### Navigation
- **Sticky header** with `backdrop-filter: blur(16px)`. Background starts at `rgba(244, 241, 235, 0.78)` and strengthens to `0.92` + warm border on scroll.
- **Nav links:** Inter 15px, underline reveal on hover/active — a thin 1px gold bar that scales from right to left on hover and left to right on active. No pill backgrounds, no filled states.
- **Active page:** medium weight (500), persistent gold underline.
- **Mobile:** full-screen navy overlay with centered links in Playfair Display 28px. Burger → X transition.

### Cards / Containers
- **Corner Style:** Gently curved (12px radius, `--radius-md`).
- **Background:** Cream (`#F4F1EB`) on navy sections; cream-depth (`#EDE8DC`) on cream sections for stacking.
- **Shadow:** Flat at rest. On hover, lift to the Card shadow (`0 4px 16px...`). No inert shadow on a grid of identical cards.
- **Border:** Warm border (`#DCD5C2`) at 1px. Accent cards use a full gold border (`#B08D57` at 1px), never a side-stripe.
- **Internal Padding:** `--space-8` (32px) on desktop; `--space-6` (24px) on mobile.

### Inputs / Fields
- **Style:** Cream-depth background, warm border (1px `#DCD5C2`), `border-radius: 8px`.
- **Focus:** 2px solid gold outline (`#B08D57`), offset 3px. Border shifts to navy.
- **Error:** Red border (`#C53030`) + error-colored helper text.
- **Labels:** Inter 500 14px, ink-soft color, 8px gap above input.

### The Eyebrow Label
The signature contextual kicker: JetBrains Mono 13px uppercase, tracking 0.16em, `#6B7280`. Preceded by a 28px × 1px gold bar (`#B08D57`). Used once per section as a deliberate system — if used on every section heading, it loses its signal value.

### The Λ Monogram
The brand's structural identity mark: a chevron/lambda glyph in Burnished Gold, appearing in the header logo, the favicon, and as a potential background watermark. Always in gold on navy; never inverted or colorized differently.

## 6. Do's and Don'ts

### Do:
- **Do** use `#7C5A1E` (Ledger Gold) for any gold text on a cream/light background. Never `#B08D57`.
- **Do** keep gold to ≤10% of any screen's visible area. One primary CTA, one or two icon accents, the logo monogram.
- **Do** use the grain overlay exclusively on navy sections (`has-grain` class). Cream sections are clean.
- **Do** apply `text-wrap: balance` to h1–h3 and `text-wrap: pretty` to long prose paragraphs.
- **Do** include a `@media (prefers-reduced-motion: reduce)` alternative for every animation — crossfade or instant transition.
- **Do** end every page with one single, unambiguous CTA pointing toward contact. No dead ends.
- **Do** use full pill radius on all buttons, without exception. The pill is a brand signature.
- **Do** mention Brussels context explicitly in hero and about copy — local grounding is a feature.
- **Do** keep shadows flat at rest. First shadow should appear only on hover or focus.

### Don't:
- **Don't** use `#B08D57` (Burnished Gold) for body text on cream backgrounds. It fails WCAG AA (2.8:1 contrast).
- **Don't** create transactional, Fiverr/Malt-style layouts: hourly rate badges, star ratings, package grids, "starting from €X" copy.
- **Don't** use stock-photo IT agency aesthetics: handshakes, server rooms, group collaboration photos.
- **Don't** add a side-stripe border (`border-left > 1px` as a colored accent) to cards or callouts. Use full borders, background tints, or leading icons instead.
- **Don't** apply gradient text (`background-clip: text`). Gold emphasis is conveyed through the Ledger Gold token on solid color, not gradients.
- **Don't** stack identical card grids with icon + heading + text repeated endlessly. Vary rhythm.
- **Don't** use the eyebrow label on every section. It's a deliberate signal, not default scaffolding. If it appears everywhere, it says nothing.
- **Don't** introduce new color hues. The palette is closed: navy, cream, gold. No blue accents, no teal, no coral.
- **Don't** use `font-family: "Playfair Display"` for body text. It is display-only. Body text is always Inter.
- **Don't** reinstate fixed day-rate pricing. Pricing is "sur mesure" throughout — remove any component or copy pattern that implies a transactional rate card.
