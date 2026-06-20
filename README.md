# Viivi Nyman — Website

A premium, conversion-focused personal website built with Next.js 14 (App Router),
React, and Tailwind CSS.

## Getting started

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.jsx       Root layout — loads fonts (next/font/google) and global metadata
  page.jsx          Home page, composes all sections
  globals.css       Tailwind directives + base styles + scroll-reveal animation
  icon.svg          Favicon / app icon (the brand mark)
components/
  Nav.jsx                 Sticky header, mobile menu
  Hero.jsx                Headline, CTAs, trust row, glow + badge accents
  BeforeAfterSlider.jsx   The hero's signature interactive before/after slider
  Services.jsx
  WhyWorkWithMe.jsx
  Process.jsx             4-step process (Discovery → Strategy → Design & Development → Launch & Growth)
  Portfolio.jsx           Case study cards
  Testimonials.jsx
  Pricing.jsx             3-tier pricing — placeholder rates, see note below
  BonusServices.jsx       Add-on services grid — placeholder, see note below
  Results.jsx             Metrics band
  About.jsx
  FinalCTA.jsx
  Contact.jsx             Contact form (client-side only — see below)
  Footer.jsx
  Mark.jsx                Brand monogram (SVG)
  Glow.jsx                Soft radial gradient blob, decorative
  RotatedBadge.jsx        Rotated circular badge (used in Hero)
  Reveal.jsx              Scroll-reveal wrapper (IntersectionObserver)
  UnderlineLink.jsx        Shared hover-underline link style
```

## Design tokens

Defined in `tailwind.config.js`:

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F5EFE3` | Page background (warm cream) |
| `paper-2` | `#EBE0C9` | Alternate section background (sand) |
| `ink` | `#1C1A15` | Primary text |
| `ink-soft` | `#6F6A5A` | Secondary text |
| `line` | `#DDD0B0` | Hairline borders |
| `deep` / `deep-2` | `#173A66` / `#0F2A4D` | Brand blue (from the logo), hover state |
| `sky` | `#D8E6FA` | Light blue accent, badges |
| `bright` | `#4D78D9` | Vivid blue used only in the `Glow` decorative blob |

Fonts (loaded via `next/font/google` in `app/layout.jsx`, no external requests at runtime):

- **Newsreader** (`font-display`) — serif, headlines and italic accents
- **Archivo** (`font-body`) — body and UI text
- **IBM Plex Mono** (`font-mono`) — eyebrows, labels, the results numerals

## Before you launch

1. **Contact form.** `components/Contact.jsx` currently simulates a submission
   client-side so you can preview the success state. Wire it up to a real
   handler — either a form service (Formspree, Resend, Basin) or a Next.js
   Route Handler at `app/api/contact/route.js` that emails you / writes to a
   database.
2. **Pricing & bonus services.** `Pricing.jsx` and `BonusServices.jsx` are
   structural placeholders — the brief asked for these sections to exist with
   real rates and inclusions "added later." Update the `TIERS` array in
   `Pricing.jsx` (name, price, description, features) and the `ADDONS` array
   in `BonusServices.jsx` once finalized.
3. **Placeholder content.** Case studies (`Portfolio.jsx`), testimonials
   (`Testimonials.jsx`), and results (`Results.jsx`) are clearly labeled
   placeholders — swap in real client work, quotes, and verified numbers.
4. **Email address.** Update `hello@viivinyman.com` in `Contact.jsx`.
5. **Metadata.** Update `app/layout.jsx`'s `metadata` export (title/description)
   and consider adding Open Graph / Twitter card images for link previews.
6. **Analytics.** No analytics are wired up — add Vercel Analytics, Plausible,
   or your preferred tool in `app/layout.jsx`.

## Deployment

This is a standard Next.js app — deploys directly to
[Vercel](https://vercel.com/new), Netlify, or any Node host. No environment
variables are required until you wire up the contact form.
