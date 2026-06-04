# B2D Official Website — Project Context

## Overview
B2D Official Website adalah website company profile untuk **B2D** — sebuah agensi digital yang menawarkan layanan strategi, desain, dan pemasaran digital. Website dibangun secara **native (Vanilla HTML)** menggunakan **Tailwind CSS v4** dengan pendekatan section-by-section sesuai design yang disediakan oleh user.

## Tech Stack
- **HTML** — Vanilla, single-page (`index.html`)
- **Tailwind CSS v4** — Via `@tailwindcss/cli` (bukan PostCSS/Vite plugin)
- **Google Fonts** — Inter (body/sans), Unbounded (headings/nav/buttons), Playfair Display (serif/italic accents)
- **No JavaScript framework** — Semua animasi menggunakan CSS native (keyframes + Tailwind utilities)
- **Image CDN** — Semua aset gambar di-host di **ImageKit** (`ik.imagekit.io/yqhp1cmbp/`)

## Project Structure
```
B2D-Official-Website/
├── index.html            # Main single-page HTML
├── src/
│   ├── input.css         # Tailwind source CSS (theme, keyframes, utilities)
│   └── output.css        # Auto-generated Tailwind output (DO NOT EDIT)
├── package.json
├── node_modules/
└── claude.md             # This context file
```

## Development Commands
```bash
npm run dev    # Watch mode: auto-compile Tailwind on file changes
npm run build  # Production: minified output CSS
```

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#07080a` | Main body background (near-black) |
| Accent Blue | `#468AFF` | Gradient start, glows, button borders |
| Accent Cyan | `#00FBFF` | Gradient end, hover glows on brand logos |
| Text Primary | `white` | Headings |
| Text Secondary | `gray-300` | Body text, description |
| Text Muted | `gray-400` | Italic serif accents, labels |

### Fonts (defined in `@theme` inside `input.css`)
- `--font-sans: "Inter"` → Default body font (`font-sans`)
- `--font-unbounded: "Unbounded"` → Navbar links, buttons, labels (`font-unbounded`)
- `--font-serif: "Playfair Display"` → Italic decorative text like "Smart", connector words (`font-serif`)

### Custom Animations (defined in `@theme`)
- `--animate-scroll` → Brand carousel infinite horizontal scroll (30s linear infinite)

### Custom Utilities (defined via `@utility`)
- `bg-grid-pattern` → CSS grid pattern (currently unused, replaced by ImageKit image)

## Completed Sections (Top → Bottom)

### 1. Background Grid Image
- Uses external image: `list-square.png` from ImageKit
- Sized at `70% auto`, positioned `center bottom`, `no-repeat`
- Container: `h-[110vh]`, `z-0`
- Sits behind everything; gets "cut off" visually by the curved horizon solid black rectangle

### 2. Floating Stars (Background Decorations)
- 12+ SVG sparkle/star icons scattered across left and right sides
- Various sizes: `w-3` to `w-6`
- Various opacities: `gray-500/30` to `gray-500/50`
- Some have `animate-pulse` for subtle shimmer effect
- All are `pointer-events-none`, `z-0`

### 3. Navbar
- Logo: External image from ImageKit (`group24.png`), no text
- Logo size: `h-6 md:h-8`
- Nav links: Services (with dropdown chevron), About, Portofolio, Blog
- Nav font: `font-unbounded`, `text-[0.85rem]`, `font-light`
- Contact Us button: Rounded-full, glassmorphism style with blue border glow
- Max width: `max-w-[90rem]`, centered
- `z-50` to stay above everything

### 4. Hero Section
- Title layout: "Grow" (Unbounded bold) → "Smart" (Playfair italic with decorative oval SVG + sparkle star) → "Go Digital" (Unbounded bold)
- Title size: `text-5xl md:text-[6rem]`
- "Smart" has: thin SVG ellipse overlay, sparkle/star icon at top-right with `animate-pulse`
- "Get Started" button: Rounded-full with gradient glow backdrop (`#468AFF → #00FBFF`), `font-unbounded`
- Button glow intensifies on hover

### 5. Curved Horizon Separator
- Three-layer technique (no CSS stroke/border):
  1. **Glow layer** (`z-0`): Blurred gradient background for ambient light effect
  2. **Gradient accent** (`z-10`): Solid `#468AFF → #00FBFF` gradient, masked with fade on both edges
  3. **Solid black rectangle** (`z-20`): Covers the gradient, offset by `-2px` to reveal the thin gradient line on top
- All use `rounded-t-[50%]` for the curve shape
- Width: `w-[150vw] md:w-[110vw]` (overflows to create smooth edge illusion)

### 6. Description Section
- Position: Pulled up with `-mt-12 md:-mt-24` to reduce gap after curve
- Background: Solid `#07080a` with `z-30` (covers grid background)
- Text style: Mix of uppercase (Unbounded/Inter) and italic lowercase (Playfair Display)
- Max width: `890px`

### 7. Brand Carousel
- Title: "DIPERCAYA OLEH BRAND INOVATIF" — `font-unbounded`, uppercase, wide tracking
- Infinite horizontal scroll animation using CSS `@keyframes scroll` + `translateX(-100%)`
- Two identical sets of logos (for seamless loop)
- 10 brand logos from ImageKit (`Mask group-*.png`)
- Hover interaction per logo:
  - `scale-125` (scale up)
  - `grayscale-0` (restore color from default grayscale)
  - `opacity-100` (restore from default `opacity-60`)
  - `drop-shadow cyan glow` (`rgba(0,251,255,0.8)`)
- Animation pauses on wrapper hover (`group-hover:[animation-play-state:paused]`)
- Faded edges on left/right using gradient overlays matching background color

## External Assets (ImageKit CDN)
| Asset | URL |
|-------|-----|
| B2D Logo | `https://ik.imagekit.io/yqhp1cmbp/group24.png` |
| Grid Background | `https://ik.imagekit.io/yqhp1cmbp/list-square.png` |
| Brand Logo 1 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-1.png` |
| Brand Logo 2 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-5.png` |
| Brand Logo 3 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group.png` |
| Brand Logo 4 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-2.png` |
| Brand Logo 5 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-4.png` |
| Brand Logo 6 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-3.png` |
| Brand Logo 7 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-7.png` |
| Brand Logo 8 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-6.png` |
| Brand Logo 9 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group-8.png` |
| Brand Logo 10 | `https://ik.imagekit.io/yqhp1cmbp/Mask%20group%20(1).png` |

## Design Principles & Patterns
1. **Dark theme** — Background `#07080a`, never pure black `#000`
2. **Gradient accent** — Always `#468AFF → #00FBFF` (blue to cyan)
3. **No stroke/border for decorative curves** — Use overlapping solid shapes technique instead
4. **Z-index layering** — Background (`z-0`) → Content (`z-10`) → Overlays (`z-20/z-30`) → Navbar (`z-50`)
5. **Responsive** — Mobile-first with `md:` breakpoint for desktop
6. **Tailwind v4 syntax** — Use `bg-linear-to-r` (not `bg-gradient-to-r`), `@theme` for variables, `@utility` for custom utilities
7. **Hover interactions** — Scale up + color restoration + glow shadow
8. **Font hierarchy** — Unbounded for UI/headings, Inter for body, Playfair Display for elegant italic accents
9. **User prefers building section by section** following a provided Figma/design reference

## Sections Still To Build
- Services section
- About section  
- Portfolio section
- Blog section
- Footer
- Mobile menu (hamburger)

## Important Notes
- The user provides design references (screenshots) for each section — always match the design closely
- The user communicates in **Bahasa Indonesia**
- All images are hosted externally on ImageKit — never download or self-host
- Tailwind watcher (`npm run dev`) runs in background during development
- The project runs via **Laragon** local server (accessible at `http://b2d-official-website.test` or via file path)
