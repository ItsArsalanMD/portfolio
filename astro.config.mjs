// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // For a free GitHub Pages domain (e.g., https://ItsArsalanMD.github.io/portfolio)
  site: 'https://ItsArsalanMD.github.io',
  base: '/portfolio',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});