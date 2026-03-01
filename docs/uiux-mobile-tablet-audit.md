# UI/UX Mobile & Tablet Audit Report

**Date:** 2026-03-01  
**Stack:** Astro 5 + React 19 + Tailwind CSS v4  
**Auditor:** Senior UI/UX Engineer (automated)

## Tested Breakpoints

| Device | Width | Height | Status |
|--------|-------|--------|--------|
| Small phone | 360px | 640px | Tested |
| iPhone 14 | 375px | 812px | Tested |
| iPhone 15 Pro | 390px | 844px | Tested |
| Pixel 7 | 412px | 915px | Tested |
| iPad | 768px | 1024px | Tested |
| iPad Air | 820px | 1180px | Tested |
| Desktop | 1280px+ | — | Verified no regressions |

## Issues Found & Fixed

### HIGH — Touch Targets (< 44px)

| # | File | Issue | Fix |
|---|------|-------|-----|
| 1 | `globals.css` | `.button-primary` / `.button-outline` height ~40px | Added `min-height: 44px` |
| 2 | `SiteHeader.astro` | Hamburger button `h-10 w-10` (40px) | Changed to `h-11 w-11` (44px) |
| 3 | `SiteHeader.astro` | Mobile nav links `py-2.5` (~38px) | Changed to `py-3` + `text-base` |
| 4 | `SiteFooter.astro` | Footer nav links had text-only hit area | Added `py-1.5` padding per link |
| 5 | `TopBar.astro` | Phone/email links `py-2` (~32px) | Changed to `py-2.5`, `text-sm` minimum |

### HIGH — Horizontal Overflow Prevention

| # | File | Issue | Fix |
|---|------|-------|-----|
| 6 | `globals.css` | No `overflow-x: hidden` on body | Added `overflow-x-hidden` to body |

### MEDIUM — Mobile Spacing (p-8 too tight on 360px)

| # | File | Issue | Fix |
|---|------|-------|-----|
| 7 | `globals.css` | `.service-card` had `p-8` on all sizes | Changed to `p-5 sm:p-6 lg:p-8` |
| 8 | `StatsSection.astro` | Card padding `p-8 sm:p-10` | Changed to `p-5 sm:p-8 lg:p-10` |
| 9 | `ComparisonSection.astro` | Cost cards had `p-8` on mobile | Changed to `p-5 sm:p-6 md:p-8` |
| 10 | `ComparisonSection.astro` | Total `text-3xl` too large on mobile | Changed to `text-2xl sm:text-3xl` |
| 11 | `FounderSection.astro` | Blockquote `p-8` | Changed to `p-5 sm:p-6 md:p-8` |

### MEDIUM — Form Accessibility & Mobile UX

| # | File | Issue | Fix |
|---|------|-------|-----|
| 12 | `ContactForm.tsx` | Missing `name`, `autocomplete`, `inputMode` | Added `name`, `autoComplete`, `inputMode="tel"/"email"` |
| 13 | `ContactForm.tsx` | Input `text-sm` (14px) triggers iOS zoom | Changed all inputs/textarea to `text-base` (16px) |
| 14 | `ContactForm.tsx` | Form lacked `aria-label` | Added `aria-label="Контактна форма"` |

### LOW — Text Size (< 14px on mobile)

| # | File | Issue | Fix |
|---|------|-------|-----|
| 15 | `TopBar.astro` | `text-xs` on mobile (12px) | Changed to `text-sm` minimum |
| 16 | `SiteFooter.astro` | Copyright `text-xs` (12px) | Changed to `text-sm` |

### LOW — Layout Edge Cases

| # | File | Issue | Fix |
|---|------|-------|-----|
| 17 | `HeroIcons.tsx` | `max-w-[360px]` could overflow 320px screens | Changed to `max-w-full sm:max-w-[360px]` |

## Remaining Known Risks

| Risk | Severity | Notes |
|------|----------|-------|
| `ComparisonTable.tsx` has `min-w-[640px]` table | Low | Component is no longer used in index.astro (replaced by ComparisonSection.astro) |
| `Diff.astro` resizer not touch-friendly | Low | Unused demo component, not user-facing |
| Stat cards 2-col on very narrow phones (320px) | Low | Content fits at 2-col; 1-col would be excessive |

## How to Verify

1. Open Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Test at 375px width — scroll full page, check no horizontal overflow
3. Test at 360px — verify stat cards and service cards fit without cramping
4. Tap/hover buttons — all should have minimum 44px touch target
5. Test contact form — mobile keyboard should show numeric for phone, email for email
6. Check footer links — each should have visible tap padding
