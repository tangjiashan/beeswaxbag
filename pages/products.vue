<template>
  <div>
    <Navbar />

    <!-- 页面头部 -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">产品中心</h1>
        <p class="section-subtitle mx-auto">蜂蜡保鲜袋、面包袋、食品收纳袋及定制款，支持OEM定制，低起订量</p>
      </div>
    </section>

    <!-- 产品网格 -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid md:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            :href="product.href"
          />
        </div>
      </div>
    </section>

    <!-- CTA横幅 -->
    <section class="py-16 bg-honey-50">
      <div class="section-container text-center">
        <h2 class="text-2xl font-bold text-bark-800 mb-3">需要定制？</h2>
        <p class="text-bark-500 mb-6">我们可以为您量身定制蜂蜡产品，满足您的品牌和需求。</p>
        <NuxtLink to="/contact" class="btn-primary">
          获取定制报价
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import standard from '~/assets/images/bee2.jpg'
import wraps from '~/assets/images/breadbag2.jpg'
import custom from '~/assets/images/beebag2.jpg'

const products = [
  { id: 1, title: '蜂蜡面包袋 · 标准款', image: standard, description: '可重复使用的蜂蜡面包袋，L号。支持定制LOGO和包装。', href: '/contact' },
  { id: 2, title: '蜂蜡保鲜膜 · 三件套', image: wraps, description: '多尺寸组合，食品级安全材质，可水洗重复使用。适合入门套装。', href: '/contact' },
  { id: 3, title: '定制环保袋', image: custom, description: '定制尺寸和包装，支持批发OEM订单，满足品牌个性化需求。', href: '/contact' },
]

useSeoMeta({
  title: '产品中心 — 蜂蜡保鲜袋厂家 | 面包袋批发 | 食品收纳袋定制 | 亿美纺织',
  description: '浏览亿美纺织全系列产品：蜂蜡保鲜袋、面包袋、食品收纳袋、定制环保袋。工厂直销，支持OEM/ODM定制，低起订量，适合跨境电商和1688批发采购。',
  keywords: '蜂蜡保鲜袋,面包袋,食品收纳袋,蜂蜡保鲜膜,蜂蜡袋批发,环保保鲜袋,蜂蜡袋厂家,跨境电商货源,1688蜂蜡袋,可重复使用保鲜袋,蜂蜡保鲜袋定制',
})
</script>
