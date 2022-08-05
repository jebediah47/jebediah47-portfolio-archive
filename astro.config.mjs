import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://jebediah47.github.io/",
  integrations: [tailwind(), solid()],
});
