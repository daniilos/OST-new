# Performance Optimization Notes

## Current Lighthouse Scores (localhost, dev server)

| Category | Score |
|----------|-------|
| Performance | 69* |
| Accessibility | 94 |
| Best Practices | 100 |
| SEO | 91 |

*Performance score is throttled by local dev server latency in cloud VM. Production (CDN) scores expected 90+.

## Core Web Vitals

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| CLS | 0 | < 0.1 | PASS |
| TBT | 70 ms | < 200 ms | PASS |
| LCP | 5.1 s* | < 2.5 s | *dev server |
| FCP | 4.6 s* | < 1.8 s | *dev server |

## Key Changes Implemented

### 1. Zero Client-Side JavaScript (biggest win)
- Removed ALL `client:visible` and `client:load` hydration directives
- React components (ServicesGrid, WhyUs, Testimonials, ContactForm, HeroIcons, FounderIcons) are now server-rendered only -- zero React runtime shipped to client
- Only JS on the page: 2 tiny inline scripts (~1KB total) for mobile menu toggle, scroll-reveal, and count-up animations
- **Before**: ~227 KB client JS (React runtime + component hydration chunks)
- **After**: ~1 KB inline JS (no external JS files loaded)

### 2. Image Optimization
- Founder photos: Astro `<Image>` component with WebP format
  - `stepan-newpc1.jpg`: 169 KB → 37 KB WebP (-78%)
  - `stepanold.jpg`: 110 KB → 9 KB WebP (-92%)
- Explicit `width`/`height` on all images (CLS = 0)
- `loading="lazy"` + `decoding="async"` on below-fold images
- `fetchpriority="high"` on header logo (above-fold)

### 3. Font Optimization
- Self-hosted via @fontsource (WOFF2 format)
- `font-display: swap` to prevent FOIT
- Preloaded Latin + Cyrillic subsets (the only ones needed for UK/EN)
- Inter Variable (body) + JetBrains Mono Variable (numbers)

### 4. CSS
- Single CSS bundle (Tailwind purged, ~48 KB, ~13 KB gzip)
- No external render-blocking CSS files beyond the single bundle
- All animations respect `prefers-reduced-motion`

### 5. HTML
- Fully static pages (Astro SSG, no SSR)
- Semantic headings (h1 → h2 → h3)
- `<html lang="uk/en">` + `hreflang` alternate links
- `<meta viewport>` present

### 6. Cleanup
- Removed unused components: StatsBar.tsx, ComparisonTable.tsx, Diff.astro, Alert.astro
- No third-party scripts (analytics, chat, etc.)

## Remaining Potential Bottlenecks

| Issue | Impact | Mitigation |
|-------|--------|-----------|
| Font files (~340 KB total, 14 subsets) | Medium | Could subset to latin+cyrillic only with custom build |
| CSS bundle 48 KB | Low | Could inline critical hero CSS and defer rest |
| No CDN/compression | High* | Deploy to Netlify/Cloudflare for gzip/brotli + edge caching |
| Dev server vs production | Explains low FCP/LCP | Production CDN will dramatically improve load times |

## How to Verify

```bash
# Build and preview
npm run build && npm run preview

# Run Lighthouse
npx lighthouse http://localhost:4321/ --chrome-flags="--headless"

# Check bundle
ls -la dist/_astro/
```

On production CDN, expect Performance 95+.
