// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/layout.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Sacramento: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
