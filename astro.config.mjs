import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  image: {
    remotePatterns: [{ protocol: 'https' }],
    domains: ['jesusbossa.dev', 'buck-one.s3.us-south.cloud-object-storage.appdomain.cloud', 'picsum.photos', "storage.googleapis.com", "img.evbuc.com"],
  },
});
