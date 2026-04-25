<template>
  <div>
    <Navbar />

    <!-- 页面头部 -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white">
      <div class="section-container text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">联系我们</h1>
        <p class="section-subtitle mx-auto">有疑问或需要报价？填写以下信息，我们将在24小时内回复您。</p>
      </div>
    </section>

    <!-- 联系内容 -->
    <section class="py-20">
      <div class="section-container">
        <div class="grid lg:grid-cols-5 gap-12">
          <!-- 联系信息侧栏 -->
          <div class="lg:col-span-2 space-y-8">
            <div class="card p-6">
              <h3 class="font-bold text-bark-800 text-lg mb-6">联系方式</h3>
              <ul class="space-y-5">
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-bark-800">邮箱</p>
                    <p class="text-bark-500 text-sm">contact@beeswaxbag.cn</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-bark-800">电话 </p>
                    <p class="text-bark-500 text-sm">+86 19042786974</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-bark-800">地址</p>
                    <p class="text-bark-500 text-sm">广西贺州钟山钟山大道与G232交叉处</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- 快速响应 -->
            <div class="card p-6 bg-honey-50 border-honey-200">
              <div class="flex items-center gap-3 mb-3">
                <svg class="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 class="font-bold text-bark-800">快速响应</h3>
              </div>
              <p class="text-bark-500 text-sm">我们通常在工作日24小时内回复。紧急询盘请通过电话联系我们。</p>
            </div>
          </div>

          <!-- 联系表单 -->
          <div class="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: '联系我们 — 亿美包装制品有限公司',
  description: '联系亿美包装获取免费样品和报价，工厂直销蜂蜡保鲜袋、面包袋、食品收纳袋，支持OEM/ODM定制。',
})
</script>
