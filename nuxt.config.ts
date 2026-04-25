export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/', '/products', '/about', '/contact'],
    },
  },
  app: {
    head: {
      title: '意美包装 — 蜂蜡保鲜袋 & 面包袋生产厂家',
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '专业蜂蜡保鲜袋、面包袋、食品收纳袋生产厂家，支持OEM/ODM定制，工厂直销，品质保障，快速发货。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '意美包装' },
      ],
    },
  },
})
