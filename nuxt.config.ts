import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  telemetry: false,
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
    },
  },
});
