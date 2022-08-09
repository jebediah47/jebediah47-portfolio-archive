import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  telemetry: false,
  ssr: false,
  app: {
    head: {
      charset: "utf-8",
    },
  },
});
