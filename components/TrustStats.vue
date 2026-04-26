<template>
  <section class="py-20 bg-white">
    <div class="section-container">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="animate-fade-in-up" v-for="(stat, i) in stats" :key="i">
          <p class="text-4xl md:text-5xl font-bold text-gradient mb-2">{{ stat.value }}</p>
          <p class="text-bark-500 text-sm font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '30+', label: '出口国家' },
  { value: '50+', label: '合作客户' },
  { value: '200', label: '最低起订量（件）' },
  { value: '15+', label: '年生产经验' },
]
</script>
