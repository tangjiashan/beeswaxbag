<template>
  <div>
    <Navbar />

    <!-- 页面头部 -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">关于我们</h1>
        <p class="section-subtitle mx-auto">15年专注蜂蜡保鲜袋研发生产，为全球客户提供优质环保包装解决方案</p>
      </div>
    </section>

    <!-- 公司介绍 -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title mb-6">广西亿美纺织有限公司</h2>
            <p class="text-bark-500 leading-relaxed mb-4">
              亿美纺织成立于广西贺州，是一家专业生产蜂蜡保鲜袋、面包袋、食品收纳袋等环保包装产品的生产厂家。公司拥有15年以上生产经验，产品远销欧美、东南亚等30多个国家和地区。
            </p>
            <p class="text-bark-500 leading-relaxed mb-4">
              我们拥有完整的生产线，涵盖原材料采购、蜂蜡配方研发、面料处理、成品加工、品质检测等全流程环节。每一道工序都严格按照ISO9001质量管理体系执行，确保产品品质稳定可靠。
            </p>
            <p class="text-bark-500 leading-relaxed">
              产品采用天然蜂蜡、荷荷巴油和有机棉等环保材料制作，可重复使用、可降解，是替代塑料保鲜膜的理想选择。我们致力于为全球客户提供可持续的环保包装解决方案。
            </p>
          </div>
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory1" alt="工厂" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工厂实拍 -->
    <section class="py-20 bg-gradient-to-b from-white to-bark-50">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">工厂环境</h2>
          <p class="section-subtitle mx-auto">现代化生产基地，先进设备，严格品控</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-8">
          <div class="relative rounded-2xl overflow-hidden group shadow-lg">
            <img :src="factory3" alt="生产线" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="font-semibold">生产车间</p>
              <p class="text-sm text-white/80">自动化流水线作业</p>
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
    <section class="py-20">
      <div class="section-container">
        <div class="text-center mb-14">
          <h2 class="section-title mb-4">认证资质</h2>
          <p class="section-subtitle mx-auto">国际认证，品质保障</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div v-for="cert in certifications" :key="cert.name" class="card p-6 text-center hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto mb-4 bg-honey-100 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="6"/>
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
                <path d="M9 8l2 2 4-4"/>
              </svg>
            </div>
            <h4 class="font-bold text-bark-800">{{ cert.name }}</h4>
            <p class="text-bark-400 text-sm mt-1">{{ cert.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-bark-700 to-bark-800"></div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-honey-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-honey-400/10 rounded-full blur-3xl"></div>

      <div class="section-container relative z-10 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">期待与您合作</h2>
        <p class="text-bark-200 text-lg max-w-xl mx-auto mb-10">获取报价、样品和定制方案，我们的团队24小时内回复。</p>
        <NuxtLink to="/contact" class="btn-primary text-lg px-8 py-4">
          联系我们
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import factory1 from '~/assets/images/factory1.png'
import factory2 from '~/assets/images/factory2.png'
import factory3 from '~/assets/images/factory2.jpg'

const certifications = [
  { name: 'ISO9001', desc: '质量管理体系认证' },
  { name: 'FDA', desc: '美国食品级认证' },
  { name: 'SGS', desc: 'SGS检测报告' },
  { name: 'LFGB', desc: '德国食品级认证' },
]

useSeoMeta({
  title: '关于我们 — 亿美包装制品有限公司',
  description: '15年蜂蜡保鲜袋生产经验，ISO9001认证，FDA食品级认证，产品远销30+国家，值得信赖的环保包装厂家。',
})
</script>
