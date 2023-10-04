// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/layout.css"],
  modules: ["@nuxtjs/google-fonts", "nuxt-icon", "@nuxt/ui"],
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Sacramento: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Dongle: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  colorMode: {
    preference: "light",
  },
});
