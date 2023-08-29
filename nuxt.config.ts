// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "@/assets/styles/sass/global.scss",
    "@/assets/styles/sass/bootstrap.scss",
  ],
  components: true,
  pages: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/sass/_mixins-functions.scss";`,
        },
      },
    },
  },
  plugins: [
    {
      src: "@/plugins/bootstrap.js",
      mode: "client",
    },
  ],
  app: {
    head: {
      link: [
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap",
        },
      ],
    },
  },
});
