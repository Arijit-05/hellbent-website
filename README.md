# HELL-BENT FITNESS STUDIO — Website

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

> **Logo Note:** Your logo file has been placed at `public/logo.png`, and `public/favicon.svg` + `src/components/Logo.jsx` recreate the dumbbell-H mark as a crisp inline SVG.

## Deploying to Vercel or Netlify

### Vercel
1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in [vercel.com](https://vercel.com).
3. Framework Preset: **Vite** · Build Command: `npm run build` · Output Directory: `dist`.
4. Click **Deploy**.

### Netlify
1. Push this repository to Git.
2. Create a new site from Git in [netlify.com](https://netlify.com).
3. Build Command: `npm run build` · Publish Directory: `dist`.
4. Click **Deploy Site**.

