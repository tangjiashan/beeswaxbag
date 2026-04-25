<template>
  <section class="py-20 bg-white">
    <div class="section-container">
      <div class="text-center mb-14">
        <h2 class="section-title mb-4">客户评价</h2>
        <p class="section-subtitle mx-auto">听听合作客户怎么说</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="card p-8 hover:-translate-y-1"
        >
          <!-- Stars -->
          <div class="flex gap-1 text-honey-400 mb-4">
            <svg v-for="s in 5" :key="s" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-bark-600 leading-relaxed mb-6 italic">
            &ldquo;{{ t.quote }}&rdquo;
          </p>

          <!-- Footer -->
          <div class="pt-4 border-t border-bark-100 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-honey-300 to-honey-500 flex items-center justify-center text-white font-bold text-sm">
              {{ t.name.charAt(0) }}
            </div>
            <div>
              <p class="font-semibold text-bark-800 text-sm">{{ t.name }}</p>
              <p class="text-bark-400 text-xs">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: '张总',
    role: '跨境电商卖家 · 深圳',
    quote: '亿美的蜂蜡袋品质非常稳定，合作两年多从未出过问题。起订量灵活，对我们的新品牌很友好。',
  },
  {
    name: '李经理',
    role: '食品贸易商 · 杭州',
    quote: '定制LOGO的效果超出预期，丝印清晰牢固，客户反馈非常好。交货速度快，合作体验很棒。',
  },
  {
    name: '王总',
    role: '环保产品品牌方 · 上海',
    quote: '亿美的FDA认证和环保材料认证让我们的产品在国际市场上更有竞争力，是很靠谱的供应商。',
  },
]
</script>
