import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://webproxylist.org',
  // Partners link to /mobileproxies-org/ with the slash. Without 'always' that
  // path and /mobileproxies-org would be two different URLs, and the one they
  // published is the one that must answer.
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
