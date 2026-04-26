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
      title: '亿美纺织 — 蜂蜡保鲜袋 & 面包袋生产厂家',
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: '蜂蜡保鲜袋,面包袋,食品收纳袋,蜂蜡保鲜膜,环保包装,可重复使用保鲜袋,蜂蜡袋厂家,蜂蜡袋批发,蜂蜡保鲜袋定制,食品级蜂蜡袋' },
        { name: 'description', content: '广西亿美纺织 — 专业蜂蜡保鲜袋、面包袋、食品收纳袋生产厂家，支持OEM/ODM定制。15年生产经验，FDA食品级认证，工厂直销，起订量低，快速发货。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '广西亿美纺织' },
        { property: 'og:locale', content: 'zh_CN' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: '广西亿美纺织有限公司' },
        { name: 'theme-color', content: '#FFB300' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://www.yimeipackaging.com/' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: '广西亿美纺织有限公司',
            alternateName: ['YiMei Textile', '亿美纺织'],
            url: 'https://www.yimeipackaging.com',
            logo: 'https://www.yimeipackaging.com/favicon.png',
            description: '专业蜂蜡保鲜袋、面包袋、食品收纳袋生产厂家，支持OEM/ODM定制',
            address: {
              '@type': 'PostalAddress',
              addressLocality: '贺州',
              addressRegion: '广西',
              addressCountry: 'CN',
              streetAddress: '钟山钟山大道与G232交叉处',
            },
            telephone: '+86-19042786974',
            email: 'contact@beeswaxbag.cn',
          }),
        },
      ],
    },
  },
})
