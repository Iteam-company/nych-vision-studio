# NYCH VISION STUDIO — Landing

Landing page built from the **Brand Book 03 / Creative Future (Revised)**.
Next.js 15 (App Router) · React 19 · TypeScript · plain CSS, no UI framework.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

## Demo / production

```bash
npm run demo       # static build + local server at http://localhost:3000
npm run build      # static export only → ./out (upload to any host: Vercel, Netlify, S3, nginx)
```

## Structure

```
app/
  layout.tsx         fonts (Inter + Roboto), metadata
  page.tsx           all sections, in brandbook order
  content.ts         every piece of copy — edit text here
  globals.css        design tokens + styles
  components/
    Header.tsx       sticky header, mobile menu
    Logo.tsx         wordmark (A) + NV monogram (C)
    Reveal.tsx       scroll reveal (motion rule 02)
    Timecode.tsx     running 24fps timecode ("time & sequence")
    ContactForm.tsx  brief form (mailto, no backend)
public/media/        visuals extracted from the brandbook
```

## How the brandbook maps to the page

| Brandbook | Implementation |
| --- | --- |
| Website flow (p.22): Hero → Services → Work → Process → Industries → CTA | Same order in `page.tsx`, plus positioning statement, principles and an end-card footer |
| Palette (p.14): Obsidian `#0A0D14`, Night Navy `#0F1322`, Deep Slate `#181F33`, Muted Blue `#6C79D8`, Soft Violet `#A89ADB`, Soft Cyan `#9CC6D3`, Ivory `#F5F2EC`, Silver `#C4CAD8` | CSS variables in `globals.css`; accents used only as light (glows, lines, focus) |
| Type (p.16): Inter Display Light / Inter Regular-Medium / Roboto Light | Inter 200–500 via `next/font`, Roboto 300 for micro labels and codes |
| Logo (p.10–13): thin wordmark, letter-spaced STUDIO, NV monogram | `Logo.tsx`; monogram closes the page as the signature |
| Visual language (p.19): frame markers, waveforms & rings, timecodes | Corner markers on hero and cases, ring/wave visuals, live REC timecode |
| Motion (p.20): move softly, reveal with purpose, end on a mark | Slow ease-out reveals, ring drift, no glitch; respects `prefers-reduced-motion` |
| Voice (p.06–08): short, precise, no hype | All copy in `content.ts` taken from or written to the brandbook lines |

## Before launch

- [ ] Replace `hello@nychvision.studio` in `ContactForm.tsx` with the real address (or POST to a form service)
- [ ] Replace case visuals in `public/media` and titles in `content.ts` with real portfolio work
- [ ] Add social links in the footer (`page.tsx`)
- [ ] Final vector logo — `Logo.tsx` is a typographic stand-in until the package is approved
- [ ] Set `metadataBase` in `layout.tsx` to the production domain (for OG images)
- [ ] Font licence: Inter Display is not on Google Fonts; Inter is used as the closest open match
