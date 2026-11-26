# Hellbent — Website

A mobile-first, dark iron-pit landing page built for **HELL-BENT FITNESS STUDIO** using **Vite + React + Tailwind CSS + Framer Motion + Lucide Icons**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## Customizing Content & Placeholders

All brand copy, contact info, WhatsApp number, opening hours, social links, and image URLs are centralized in **`src/config.js`**.

Search for `[REPLACE]` in `src/config.js` to update:
- `phoneDisplay`, `phoneHref`, `whatsappNumber` (format: `919876543210` without `+`)
- `email`, `addressLine1`, `addressLine2`, `city`
- `googleMapsUrl` and `googleMapsEmbedUrl`
- `hours` (today's day is automatically highlighted in yellow)
- `images` (swap Unsplash placeholders with real gym photos)
- `useCustomLogoImage`: set to `true` to use `/public/logo.png` in the navbar/footer instead of the inline SVG dumbbell-H mark




