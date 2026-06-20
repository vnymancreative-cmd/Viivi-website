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
  Hero.jsx                Headline, CTAs, trust row
  BeforeAfterSlider.jsx   The hero's signature interactive before/after slider
  Services.jsx
  WhyWorkWithMe.jsx
  Process.jsx             4-step process (Discovery → Strategy → Design & Development → Launch & Growth)
  Portfolio.jsx           Case study cards
  Testimonials.jsx
  Results.jsx             Metrics band
  About.jsx
  FinalCTA.jsx
  Contact.jsx             Contact form (client-side only — see below)
  Footer.jsx
  Mark.jsx                Brand monogram (SVG)
  Reveal.jsx              Scroll-reveal wrapper (IntersectionObserver)
  UnderlineLink.jsx        Shared hover-underline link style
```

## Design tokens

Defined in `tailwind.config.js`:

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F7F6F3` | Page background |
| `paper-2` | `#EFECE5` | Alternate section background |
| `ink` | `#181A1B` | Primary text |
| `ink-soft` | `#6B6964` | Secondary text |
| `line` | `#DEDDD4` | Hairline borders |
| `deep` / `deep-2` | `#173A66` / `#0F2A4D` | Brand accent (from the logo), hover state |
| `sky` | `#CFE4F7` | Light accent, badges |

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
2. **Placeholder content.** Case studies (`Portfolio.jsx`), testimonials
   (`Testimonials.jsx`), and results (`Results.jsx`) are clearly labeled
   placeholders — swap in real client work, quotes, and verified numbers.
3. **Email address.** Update `hello@viivinyman.com` in `Contact.jsx`.
4. **Metadata.** Update `app/layout.jsx`'s `metadata` export (title/description)
   and consider adding Open Graph / Twitter card images for link previews.
5. **Analytics.** No analytics are wired up — add Vercel Analytics, Plausible,
   or your preferred tool in `app/layout.jsx`.

## Deployment

This is a standard Next.js app — deploys directly to
[Vercel](https://vercel.com/new), Netlify, or any Node host. No environment
variables are required until you wire up the contact form.
