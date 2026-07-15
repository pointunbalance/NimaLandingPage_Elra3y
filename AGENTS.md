# AGENTS.md - Design Rules

## Project Overview
- Arabic landing page website for "الراعي" (El Ra3y) computer/laptop services company
- Hosted on GitHub Pages: https://pointunbalance.github.io/NimaLandingPage_Elra3y/
- All text in Arabic, RTL layout (`dir="rtl"`, `lang="ar"`)

## Folder Structure Rules
- Each laptop product has its own folder with full specs in the name
- Format: `Brand-Model-CPU-RAM-Storage-GPU/`
- Examples:
  - `Dell-Latitude-E5570-i7-6600U-8GB-256GB/`
  - `Dell-Precision-7520-i7-6820HQ-16GB-256GB-Quadro-M1200/`
  - `HP-ZBook-Firefly-14-G11-Ultra7-16GB-256GB-RTX-A500/`

## Image Rules

### Hero Image (Main Product Image)
- **MUST be an official manufacturer image** (not user photos)
- Official images go in `Pict/Dell_Official/` or `Pict/HP_Official/`
- The hero image in the landing page must always be an official product photo
- Never use HWiNFO screenshots, system info screens, or user-taken photos as hero images

### Product Photos
- User photos must be renamed to descriptive names
- Format: `1-Brand-Model.jpg`, `2-Brand-Model.jpg`, etc.
- Move user photos to `Pict/` subfolder

### Official Images
- Download from manufacturer websites or trusted sources
- Store in `Pict/Dell_Official/` or `Pict/HP_Official/`
- Name format: `01-Product-Front-View.jpg`, `02-Product-Angle-View.jpg`, etc.

### Store Page Product Images
- The official image in the store page (laptops.html) MUST show the front face of the laptop
- Never use back/lid images as the main product image in the store

## Page Structure Rules
Each laptop page must include:
1. **Header** - Navigation links (Home, Laptops, Features, Specs, Gallery, Contact)
2. **Hero Section** - Product name, subtitle, official hero image
3. **Features Section** - 4 feature cards (CPU, GPU, Storage, RAM)
4. **Specs Section** - Detailed technical specifications
5. **Gallery Section** - All photos with lightbox (keyboard nav + click-to-close)
6. **Video Section** - Embedded YouTube review video
7. **Contact Section** - Company info, phone numbers, social links
8. **Footer** - Copyright, navigation links

## Design Rules

### Spec Cards
- Each spec card MUST appear separately on its own line
- Cards should NOT overlap or be cut off
- Use `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for responsive layout
- Each card should have proper spacing and padding

### GPU Cards
- Each graphics card (GPU) MUST have its own separate card
- GPU cards must include full details: Model, Video Memory, Type, and any additional GPUs
- If the laptop has multiple GPUs (e.g., dedicated + integrated), list each one in a separate card

## Store Page (laptops.html) Rules
- Each product card must have:
  - Official product image
  - Badge (e.g., "متاح" for available)
  - Product name
  - Description
  - Spec tags (CPU, GPU, RAM, Storage)
  - "شوف التفاصيل" button linking to product page
- All product cards must have consistent height
- The "شوف التفاصيل" button must be at the same level in all cards (aligned to bottom)

## Technical Requirements
- Google Fonts: Noto Kufi Arabic
- CSS Variables for colors
- Responsive design (mobile-friendly)
- Lightbox with keyboard navigation (Arrow keys + Escape)
- YouTube video embed with Arabic title
- Facebook social links
- Company contact info (Address, Phone numbers)
- Visitor counter at the bottom of every page (using FiniCounter)

## Deployment Rules
- Changes must be pushed to both `master` and `gh-pages` branches
- Use `git checkout gh-pages; git merge master; git push origin gh-pages; git checkout master`
- Wait for GitHub Pages to build before testing (1-2 minutes)
