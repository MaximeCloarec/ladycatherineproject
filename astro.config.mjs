// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://loquacious-dieffenbachia-d3e847.netlify.app/",
  integrations: [preact()],
});