# Vercel Web Interface Guidelines Audit Report

## Accessibility

### Icon-only buttons need aria-label
| File | Line | Issue |
|------|------|-------|
| index.html | 192 | Social link `<a>` with `&#102;` has `title` but no `aria-label` |
| index.html | 193 | Social link `<a>` with `&#128295;` has `title` but no `aria-label` |
| Dell-Latitude/.../index.html | 228 | Social link `&#102;` missing `aria-label` |
| Dell-Latitude/.../index.html | 229 | Social link `&#128295;` missing `aria-label` |
| Dell-Precision/.../index.html | 227 | Social link `&#102;` missing `aria-label` |
| Dell-Precision/.../index.html | 228 | Social link `&#128295;` missing `aria-label` |
| HP-ZBook/.../index.html | 251 | Social link `&#102;` missing `aria-label` |
| HP-ZBook/.../index.html | 252 | Social link `&#128295;` missing `aria-label` |
| Dell-Latitude/.../index.html | 254 | Lightbox close button `&times;` missing `aria-label` (screen reader says "times") |
| Dell-Latitude/.../index.html | 255 | Lightbox prev button `&#8249;` missing `aria-label` |
| Dell-Latitude/.../index.html | 256 | Lightbox next button `&#8250;` missing `aria-label` |
| Dell-Precision/.../index.html | 253 | Lightbox close button `&times;` missing `aria-label` |
| Dell-Precision/.../index.html | 254 | Lightbox prev button `&#8249;` missing `aria-label` |
| Dell-Precision/.../index.html | 255 | Lightbox next button `&#8250;` missing `aria-label` |
| HP-ZBook/.../index.html | 280 | Lightbox close button `&times;` missing `aria-label` |
| HP-ZBook/.../index.html | 281 | Lightbox prev button `&#8249;` missing `aria-label` |
| HP-ZBook/.../index.html | 282 | Lightbox next button `&#8250;` missing `aria-label` |

### Interactive elements need keyboard handlers
| File | Line | Issue |
|------|------|-------|
| Dell-Latitude/.../index.html | 175-184 | `<div class="gallery-item" onclick="openLightbox(N)">` - divs with click handlers have no `onkeydown`/`onkeypress`/`role="button"`/`tabindex="0"` |
| Dell-Precision/.../index.html | 172-183 | Same issue - gallery divs not keyboard accessible |
| HP-ZBook/.../index.html | 199-205 | Same issue - gallery divs not keyboard accessible |

### Decorative icons need aria-hidden
| File | Line | Issue |
|------|------|-------|
| index.html | 105 | Service icon `&#128187;` not `aria-hidden="true"` |
| index.html | 110 | Service icon `&#128241;` not `aria-hidden="true"` |
| index.html | 115 | Service icon `&#128249;` not `aria-hidden="true"` |
| index.html | 120 | Service icon `&#128295;` not `aria-hidden="true"` |
| index.html | 152 | Decorative lock icon `&#128274;` not `aria-hidden="true"` |
| index.html | 167 | Contact icon `&#128205;` not `aria-hidden="true"` |
| index.html | 172 | Section icon `&#128222;` not `aria-hidden="true"` |
| index.html | 174 | Contact icon `&#128100;` not `aria-hidden="true"` |
| index.html | 180 | Contact icon `&#128100;` not `aria-hidden="true"` |
| index.html | 189 | Contact icon `&#127760;` not `aria-hidden="true"` |
| laptops.html | 70 | Hero icon `&#128187;` not `aria-hidden="true"` |
| laptops.html | 79 | Feature icon `&#128274;` not `aria-hidden="true"` |
| laptops.html | 83 | Feature icon `&#128176;` not `aria-hidden="true"` |
| laptops.html | 87 | Feature icon `&#128295;` not `aria-hidden="true"` |
| laptops.html | 91 | Feature icon `&#128187;` not `aria-hidden="true"` |
| Dell-Latitude/.../index.html | 111 | Feature icon `&#9889;` not `aria-hidden="true"` |
| Dell-Latitude/.../index.html | 116 | Feature icon `&#127918;` not `aria-hidden="true"` |
| Dell-Latitude/.../index.html | 121 | Feature icon `&#128190;` not `aria-hidden="true"` |
| Dell-Latitude/.../index.html | 126 | Feature icon `&#128187;` not `aria-hidden="true"` |
| Dell-Latitude/.../index.html | 191 | Section icon `&#127909;` not `aria-hidden="true"` |
| Dell-Precision/.../index.html | 111 | Feature icon `&#9889;` not `aria-hidden="true"` |
| Dell-Precision/.../index.html | 116 | Feature icon `&#127918;` not `aria-hidden="true"` |
| Dell-Precision/.../index.html | 121 | Feature icon `&#128190;` not `aria-hidden="true"` |
| Dell-Precision/.../index.html | 126 | Feature icon `&#128187;` not `aria-hidden="true"` |
| Dell-Precision/.../index.html | 190 | Section icon `&#127909;` not `aria-hidden="true"` |
| HP-ZBook/.../index.html | 117-120 | Feature icons `&#9889;`, `&#127918;`, `&#128190;`, `&#128187;` not `aria-hidden="true"` |
| HP-ZBook/.../index.html | 226 | Contact icon `&#128205;` not `aria-hidden="true"` |
| HP-ZBook/.../index.html | 231 | Contact icon `&#128222;` not `aria-hidden="true"` |
| HP-ZBook/.../index.html | 233,240 | Contact icons `&#128100;` not `aria-hidden="true"` |
| HP-ZBook/.../index.html | 248 | Contact icon `&#127760;` not `aria-hidden="true"` |

### scroll-margin-top on heading anchors
| File | Line | Issue |
|------|------|-------|
| index.html | 99 | `#services` section heading lacks `scroll-margin-top` |
| index.html | 128 | `#about` section heading lacks `scroll-margin-top` |
| index.html | 161 | `#contact` section heading lacks `scroll-margin-top` |
| Dell-Latitude/.../index.html | 106 | `#features` lacks `scroll-margin-top` |
| Dell-Latitude/.../index.html | 134 | `#specs` lacks `scroll-margin-top` |
| Dell-Latitude/.../index.html | 171 | `#gallery` lacks `scroll-margin-top` |
| Dell-Latitude/.../index.html | 198 | `#contact` lacks `scroll-margin-top` |
| Dell-Precision/.../index.html | 106,134,168,197 | Same - all section anchors lack `scroll-margin-top` |
| HP-ZBook/.../index.html | 113,125,195,210,220 | Same - all section anchors lack `scroll-margin-top` |

### Lightbox modal lacks focus trapping
| File | Line | Issue |
|------|------|-------|
| Dell-Latitude/.../index.html | 253-260 | Lightbox modal does not trap focus - keyboard users can tab out of the modal |
| Dell-Precision/.../index.html | 252-259 | Same |
| HP-ZBook/.../index.html | 279-286 | Same |

---

## Focus States

### Missing focus-visible definitions
| File | Line | Issue |
|------|------|-------|
| index.html | 21 | `.cta-btn:focus-visible` not defined (hero-btn and service-card are, but cta-btn is missing) |
| index.html | 21 | `.footer-links a:focus-visible` not defined |
| Dell-Latitude/.../index.html | 20 | `.lightbox-nav:focus-visible` not defined |
| Dell-Latitude/.../index.html | 20 | `.footer-links a:focus-visible` not defined |
| Dell-Precision/.../index.html | 20 | `.lightbox-nav:focus-visible` not defined |
| Dell-Precision/.../index.html | 20 | `.footer-links a:focus-visible` not defined |
| HP-ZBook/.../index.html | 20 | `.lightbox-nav:focus-visible` not defined |
| HP-ZBook/.../index.html | 20 | `.footer-links a:focus-visible` not defined |

---

## Animation

### transition: all (anti-pattern)
| File | Line | Issue |
|------|------|-------|
| index.html | 32 | `.hero-btn` uses `transition:all .3s` - should list specific properties |
| index.html | 70 | `.cta-btn` uses `transition:all .3s` - should list specific properties |
| laptops.html | 42 | `.product-btn` uses `transition:all .3s` - should list specific properties |

### Animate transform/opacity only violations
| File | Line | Issue |
|------|------|-------|
| index.html | 38 | `.service-card` transitions `box-shadow` which triggers layout |
| index.html | 53 | `.contact-card` transitions `border-color` |
| index.html | 64 | `.social-link` transitions `background` |
| Dell-Latitude/.../index.html | 31 | `.feature-card` transitions `box-shadow` |
| Dell-Latitude/.../index.html | 53 | `.company-card` transitions `border-color` |
| Dell-Latitude/.../index.html | 64 | `.social-link` transitions `background` |
| Dell-Precision/.../index.html | 31,53,64 | Same issues |
| HP-ZBook/.../index.html | 31,66,79 | Same issues |

### Missing transform-origin on transforms
| File | Line | Issue |
|------|------|-------|
| Dell-Latitude/.../index.html | 46 | `.gallery-item img` has `transition:transform .3s` on hover with `scale(1.1)` but no `transform-origin` set |
| Dell-Precision/.../index.html | 46 | Same |
| HP-ZBook/.../index.html | 46 | Same |

---

## Typography

### font-variant-numeric: tabular-nums missing
| File | Line | Issue |
|------|------|-------|
| index.html | 49 | `.stat-number` contains numbers (+1000, +10, 24/7) without `font-variant-numeric:tabular-nums` |
| Dell-Latitude/.../index.html | 140-165 | `.spec-value` contains numeric specs (2.60 GHz, 3.40 GHz, 4 MB, etc.) without `tabular-nums` |
| Dell-Precision/.../index.html | 140-163 | Same |
| HP-ZBook/.../index.html | 131-190 | Same |

### text-wrap: balance missing on headings
| File | Line | Issue |
|------|------|-------|
| index.html | 29,35,45,68 | All h1/h2 headings missing `text-wrap:balance` |
| laptops.html | 27,30 | Headings missing `text-wrap:balance` |
| All product pages | Various | All headings missing `text-wrap:balance` |

---

## Content Handling

### Flex children need min-w-0
| File | Line | Issue |
|------|------|-------|
| index.html | 14 | `.header-content` flex children don't have `min-width:0` (only headings do via line 24) |
| index.html | 60 | `.contact-details` inside flex container lacks `min-width:0` |
| All product pages | Various | `.contact-details`, `.footer-links`, `.company-grid` flex children lack `min-width:0` |

---

## Images

### img needs explicit width and height
| File | Line | Issue |
|------|------|-------|
| laptops.html | 104 | `<img>` HP ZBook product card - no `width`/`height` attributes |
| laptops.html | 120 | `<img>` Dell Latitude product card - no `width`/`height` |
| laptops.html | 135 | `<img>` Dell Precision product card - no `width`/`height` |
| Dell-Latitude/.../index.html | 102 | Hero image `<img>` - no `width`/`height` |
| Dell-Latitude/.../index.html | 175-184 | All 10 gallery `<img>` tags - no `width`/`height` |
| Dell-Precision/.../index.html | 102 | Hero image - no `width`/`height` |
| Dell-Precision/.../index.html | 172-183 | All 12 gallery `<img>` tags - no `width`/`height` |
| HP-ZBook/.../index.html | 109 | Hero image - no `width`/`height` |
| HP-ZBook/.../index.html | 199-205 | All 7 gallery `<img>` tags - no `width`/`height` |

### Below-fold loading="lazy" missing
| File | Line | Issue |
|------|------|-------|
| laptops.html | 104,120,135 | Product card images (below fold) missing `loading="lazy"` |
| Dell-Latitude/.../index.html | 175-184 | Gallery images (below fold) missing `loading="lazy"` |
| Dell-Precision/.../index.html | 172-183 | Gallery images (below fold) missing `loading="lazy"` |
| HP-ZBook/.../index.html | 199-205 | Gallery images (below fold) missing `loading="lazy"` |

### Above-fold critical images missing priority
| File | Line | Issue |
|------|------|-------|
| Dell-Latitude/.../index.html | 102 | Hero image above fold missing `fetchpriority="high"` or `rel="preload"` |
| Dell-Precision/.../index.html | 102 | Same |
| HP-ZBook/.../index.html | 109 | Same |

---

## Performance

### Missing link rel="preconnect" for CDN domains
| File | Line | Issue |
|------|------|-------|
| index.html | 3-77 | Missing `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` |
| index.html | 3-77 | Missing preconnect for `//finicounter.eu.org` |
| laptops.html | 3-54 | Same missing preconnects |
| All product pages | head section | Same missing preconnects |

### Critical fonts loaded via @import instead of preload
| File | Line | Issue |
|------|------|-------|
| index.html | 8 | `@import url("https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic...")` in CSS blocks rendering - should be `<link rel="preload" as="style">` in HTML `<head>` |
| laptops.html | 8 | Same |
| Dell-Latitude/.../index.html | 8 | Same |
| Dell-Precision/.../index.html | 8 | Same |
| HP-ZBook/.../index.html | 8 | Same |

### Protocol-relative URL for finicounter
| File | Line | Issue |
|------|------|-------|
| index.html | 220 | `src="//finicounter.eu.org/finicounter.js"` - protocol-relative URL is a legacy anti-pattern; should use explicit `https://` |
| laptops.html | 193 | Same |
| All product pages | bottom | Same |

---

## Touch & Interaction

### Missing touch-action: manipulation
| File | Line | Issue |
|------|------|-------|
| All files | CSS | No `touch-action:manipulation` defined anywhere to eliminate 300ms tap delay |

### Missing -webkit-tap-highlight-color
| File | Line | Issue |
|------|------|-------|
| All files | CSS | No `-webkit-tap-highlight-color:transparent` on interactive elements |

### Missing overscroll-behavior: contain in modals
| File | Line | Issue |
|------|------|-------|
| Dell-Latitude/.../index.html | 70 | Lightbox modal `.lightbox` missing `overscroll-behavior:contain` - scroll can escape the modal |
| Dell-Precision/.../index.html | 70 | Same |
| HP-ZBook/.../index.html | 50 | Same |

---

## Safe Areas & Layout

### Missing overflow-x-hidden on containers
| File | Line | Issue |
|------|------|-------|
| All files | CSS | No `overflow-x:hidden` on `body` or `.container` - hero pseudo-elements or transforms may cause horizontal scrollbar |
| index.html | 26 | `.hero` has `overflow:hidden` but only on that section, not on `body` |

---

## Dark Mode & Theming

### Missing color-scheme on html
| File | Line | Issue |
|------|------|-------|
| All files | `<html>` tag | Missing `color-scheme` attribute (e.g., `color-scheme="light"`) |

### Missing meta theme-color
| File | Line | Issue |
|------|------|-------|
| All files | `<head>` | Missing `<meta name="theme-color" content="#1a1a2e">` matching the dark header background |

---

## Locale & i18n

### Missing translate="no" on brand names
| File | Line | Issue |
|------|------|-------|
| Dell-Latitude/.../index.html | 87 | Logo "Dell Latitude" should have `translate="no"` |
| Dell-Latitude/.../index.html | 100 | h1 "Dell Latitude E5570" - brand/product name should have `translate="no"` |
| Dell-Precision/.../index.html | 87 | Logo "Dell Precision" - missing `translate="no"` |
| Dell-Precision/.../index.html | 100 | h1 "Dell Precision 7520" - missing `translate="no"` |
| HP-ZBook/.../index.html | 94 | Logo "HP ZBook Firefly" - missing `translate="no"` |
| HP-ZBook/.../index.html | 107 | h1 "HP ZBook Firefly 14 G11" - missing `translate="no"` |
| All product pages | spec values | "Intel", "AMD", "NVIDIA", "DDR4", "DDR5", "NVMe", "SSD", "Wi-Fi", "Windows" etc. should have `translate="no"` |

---

## Anti-patterns Summary

| Category | File | Line | Anti-pattern |
|----------|------|------|-------------|
| transition:all | index.html | 32 | `.hero-btn{transition:all .3s}` |
| transition:all | index.html | 70 | `.cta-btn{transition:all .3s}` |
| transition:all | laptops.html | 42 | `.product-btn{transition:all .3s}` |
| div with click handler | Dell-Latitude/.../index.html | 175-184 | `<div class="gallery-item" onclick>` should be `<button>` |
| div with click handler | Dell-Precision/.../index.html | 172-183 | Same |
| div with click handler | HP-ZBook/.../index.html | 199-205 | Same |
| Images without dimensions | All product pages | Various | All `<img>` tags lack explicit `width`/`height` |
| Icon-only buttons no aria-label | All product pages | lightbox buttons | `&times;`, `&#8249;`, `&#8250;` buttons lack `aria-label` |
| @import font loading | All files | CSS line 8 | Blocks rendering; should use `<link rel="preload">` |
| No preconnect | All files | `<head>` | Missing preconnect for Google Fonts CDN |
| No touch-action | All files | CSS | Missing `touch-action:manipulation` |
| No theme-color | All files | `<head>` | Missing `<meta name="theme-color">` |
| No color-scheme | All files | `<html>` | Missing `color-scheme` attribute |
| Protocol-relative URL | All files | bottom | `//finicounter.eu.org` should be `https://finicounter.eu.org` |
| No scroll-margin-top | All files | section anchors | Navigation anchors will be obscured by sticky header |
| No focus trapping | Product pages | lightbox | Lightbox modal doesn't trap focus |
| No overflow-x-hidden | All files | body | Risk of horizontal scrollbar from hero pseudo-elements |

---

## Totals

- **Critical (must fix):** 23 issues
- **Important (should fix):** 41 issues
- **Nice to have:** 15 issues
- **Total findings:** 79 issues
