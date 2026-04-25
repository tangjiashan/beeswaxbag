<template>
  <div class="card p-8">
    <h3 class="text-2xl font-bold text-bark-800 mb-2">发送询盘</h3>
    <p class="text-bark-400 text-sm mb-6">填写以下信息，我们将在24小时内回复您。</p>

    <form class="space-y-5" @submit.prevent="handleSubmit">
      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label class="label">姓名 <span class="text-red-500">*</span></label>
          <input v-model="form.name" type="text" class="input-field" placeholder="请输入姓名" />
          <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
        </div>
        <div>
          <label class="label">邮箱 <span class="text-red-500">*</span></label>
          <input v-model="form.email" type="email" class="input-field" placeholder="请输入邮箱" />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>
      </div>

      <div>
        <label class="label">电话 </label>
        <input v-model="form.phone" type="tel" class="input-field" placeholder="请输入联系电话" />
        <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
      </div>

      <div>
        <label class="label">公司名称</label>
        <input v-model="form.company" type="text" class="input-field" placeholder="请输入公司名称" />
      </div>

      <div>
        <label class="label">需求描述 <span class="text-red-500">*</span></label>
        <textarea v-model="form.message" rows="5" class="input-field resize-none" placeholder="请描述您的需求（产品种类、数量、定制要求等）" />
        <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
      </div>

      <div class="flex gap-3">
        <button type="submit" class="btn-primary" :disabled="submitting">
          {{ submitted ? '已提交 ✓' : submitting ? '提交中...' : '提交询盘' }}
        </button>
        <button type="button" class="btn-secondary" @click="resetForm">重置</button>
      </div>

      <div v-if="submitError" class="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
        {{ submitError }}
      </div>
      <div v-if="submitted" class="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
        提交成功！我们会尽快与您联系。
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', phone: '', company: '', message: '' })
const errors = reactive<Record<string, string>>({})
const submitting = ref(false)
const submitted = ref(false)
const submitError = ref('')

function validate() {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = '姓名至少2个字符'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = '请输入有效的邮箱地址'
  if (form.phone && form.phone.replace(/\D/g, '').length < 8) errors.phone = '请输入有效的电话号码'
  if (!form.message.trim() || form.message.trim().length < 6) errors.message = '请详细描述您的需求（至少6个字符）'
  return Object.keys(errors).length === 0
}

async function handleSubmit() {
  if (!validate()) return
  submitting.value = true
  submitError.value = ''
  try {
    const res = await fetch('https://formspree.io/f/mgordrrz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      submitted.value = true
      resetForm()
      setTimeout(() => { submitted.value = false }, 5000)
    } else {
      submitError.value = '提交失败，请稍后重试'
    }
  } catch {
    submitError.value = '网络错误，请稍后重试'
  } finally {
    submitting.value = false
  }
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.company = ''
  form.message = ''
  submitError.value = ''
  Object.keys(errors).forEach(k => delete errors[k])
}
</script>
