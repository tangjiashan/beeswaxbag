<template>
  <div>
    <Navbar />
    <Hero />
    <TrustStats />
    <WhyChooseUs />

    <!-- 产品展示 -->
    <section class="py-20 bg-gradient-to-b from-white to-bark-50">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">精选产品</h2>
          <p class="section-subtitle mx-auto">涵盖蜂蜡保鲜袋、面包袋、食品收纳袋及定制款等环保包装产品</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in productsList"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            :href="product.href"
          />
        </div>
      </div>
    </section>

    <!-- 工厂实拍 -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">工厂实拍</h2>
          <p class="section-subtitle mx-auto">现代化生产基地，每道工序严格品控</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-8">
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory3" alt="生产线" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">生产线</p>
              <p class="text-sm text-white/80">自动化设备与流水线</p>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory2" alt="品质检测" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">品质检测</p>
              <p class="text-sm text-white/80">严格检验与测试</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 认证资质 -->
    <section class="py-20 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">认证资质</h2>
          <p class="section-subtitle mx-auto">产品通过国际食品级安全认证，符合环保标准</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="card p-8 flex flex-col sm:flex-row items-center gap-6">
            <div class="w-32 h-32 shrink-0 bg-gradient-to-br from-honey-100 to-honey-200 rounded-2xl flex items-center justify-center">
              <svg class="w-16 h-16 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div class="text-center sm:text-left">
              <h3 class="font-bold text-xl text-bark-800 mb-2">FDA食品级认证</h3>
              <p class="text-bark-400 leading-relaxed">所有原材料和蜂蜡涂层均符合FDA食品接触要求，可安全用于食品包装。</p>
              <div class="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  FDA认证
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  食品级安全
                </span>
                <span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  可降解环保
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <Testimonials />

    <!-- CTA -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-bark-700 to-bark-800"></div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-honey-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-honey-400/10 rounded-full blur-3xl"></div>

      <div class="section-container relative z-10 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">开启您的蜂蜡产品线</h2>
        <p class="text-bark-200 text-lg max-w-xl mx-auto mb-10">获取报价、样品和定制方案，我们的团队24小时内回复。</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-honey-500 text-white font-semibold rounded-xl shadow-lg shadow-honey-500/30 hover:bg-honey-400 hover:shadow-xl transition-all duration-300 text-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            发送询盘
          </NuxtLink>
          <NuxtLink to="/products" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg">
            查看全部产品
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import standard from '~/assets/images/bee1.jpg'
import wraps from '~/assets/images/beebag1.jpg'
import custom from '~/assets/images/breadbag1.jpg'
import factory2 from '~/assets/images/factory2.png'
import factory3 from '~/assets/images/factory2.jpg'

const productsList = [
  { id: 1, title: '蜂蜡面包袋 · 标准款', image: standard, description: '可重复使用的蜂蜡面包袋，L号。支持定制LOGO和包装。', href: '/products' },
  { id: 2, title: '蜂蜡保鲜膜 · 三件套', image: wraps, description: '多尺寸组合，食品级安全材质，可水洗重复使用。适合入门套装。', href: '/products' },
  { id: 3, title: '定制环保袋', image: custom, description: '定制尺寸和包装，支持批发OEM订单，满足品牌个性化需求。', href: '/products' },
]

useSeoMeta({
  title: '亿美纺织 — 蜂蜡保鲜袋厂家 | 面包袋批发 | 食品收纳袋定制',
  description: '广西亿美纺织 — 15年蜂蜡保鲜袋、面包袋、食品收纳袋生产厂家。支持OEM/ODM定制，FDA食品级认证，工厂直销，起订量低。跨境卖家货源，1688批发蜂蜡保鲜袋。',
  keywords: '蜂蜡保鲜袋,蜂蜡保鲜袋厂家,蜂蜡保鲜袋批发,面包袋,食品收纳袋,蜂蜡保鲜膜,环保保鲜袋,跨境电商蜂蜡袋,1688蜂蜡袋,蜂蜡保鲜袋定制,蜂蜡袋OEM,可重复使用保鲜袋',
})
</script>
