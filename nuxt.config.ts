// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // TAMBAHKAN INI
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL // Ini akan mengambil dari file .env
  },
  // Konfigurasi Vite untuk mengatasi error path di Windows
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },

  // Add Nuxt UI and Content
  modules: [
    '@nuxt/ui',
    '@nuxt/content'
  ],

  ui: {},

  css: ['~/assets/css/main.css']
})