<template>
  <section class="py-20 bg-gradient-to-b from-bark-50 to-white">
    <div class="section-container">
      <div class="text-center mb-14">
        <h2 class="section-title mb-4">为什么选择我们</h2>
        <p class="section-subtitle mx-auto">十年专注环保包装，值得信赖的生产厂家</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(item, i) in features"
          :key="i"
          class="card p-8 text-center group hover:-translate-y-1"
        >
          <div class="w-16 h-16 mx-auto mb-6 bg-honey-100 rounded-2xl flex items-center justify-center group-hover:bg-honey-200 transition-colors">
            <svg class="w-8 h-8 text-honey-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="item.icon === 'moq'">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </template>
              <template v-else-if="item.icon === 'oem'">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </template>
              <template v-else>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </template>
            </svg>
          </div>
          <h3 class="font-bold text-xl text-bark-800 mb-3">{{ item.title }}</h3>
          <p class="text-bark-400 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'moq',
    title: '低起订量',
    description: '200件起订，小批量也能享受工厂价格，降低您的采购门槛。',
  },
  {
    icon: 'oem',
    title: '全功能定制',
    description: '支持尺寸定制、LOGO丝印、包装设计定制，满足品牌个性化需求。',
  },
  {
    icon: 'cert',
    title: '环保认证材料',
    description: '通过FDA、ISO9001、SGS等认证，使用天然蜂蜡和有机棉等环保材料。',
  },
]
</script>
