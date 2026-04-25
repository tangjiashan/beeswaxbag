import { _ as _sfc_main$2, a as __nuxt_component_3 } from "./Footer-BF_klpe4.js";
import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { a as useSeoMeta } from "./v3-Gcgn0JnC.js";
import "./nuxt-link-Df8DkiWN.js";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/hookable/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/unctx/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/radix3/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/defu/dist/defu.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({ name: "", email: "", phone: "", company: "", message: "" });
    const errors = reactive({});
    const submitting = ref(false);
    const submitted = ref(false);
    const submitError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card p-8" }, _attrs))}><h3 class="text-2xl font-bold text-bark-800 mb-2">发送询盘</h3><p class="text-bark-400 text-sm mb-6">填写以下信息，我们将在24小时内回复您。</p><form class="space-y-5"><div class="grid sm:grid-cols-2 gap-5"><div><label class="label">姓名 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="input-field" placeholder="请输入姓名">`);
      if (unref(errors).name) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label">邮箱 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="input-field" placeholder="请输入邮箱">`);
      if (unref(errors).email) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><label class="label">电话 </label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" class="input-field" placeholder="请输入联系电话">`);
      if (unref(errors).phone) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label">公司名称</label><input${ssrRenderAttr("value", unref(form).company)} type="text" class="input-field" placeholder="请输入公司名称"></div><div><label class="label">需求描述 <span class="text-red-500">*</span></label><textarea rows="5" class="input-field resize-none" placeholder="请描述您的需求（产品种类、数量、定制要求等）">${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(errors).message) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-3"><button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""}>${ssrInterpolate(unref(submitted) ? "已提交 ✓" : unref(submitting) ? "提交中..." : "提交询盘")}</button><button type="button" class="btn-secondary">重置</button></div>`);
      if (unref(submitError)) {
        _push(`<div class="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">${ssrInterpolate(unref(submitError))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(submitted)) {
        _push(`<div class="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium"> 提交成功！我们会尽快与您联系。 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "联系我们 — 亿美包装制品有限公司",
      description: "联系亿美包装获取免费样品和报价，工厂直销蜂蜡保鲜袋、面包袋、食品收纳袋，支持OEM/ODM定制。"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$2;
      const _component_ContactForm = _sfc_main$1;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white"><div class="section-container text-center"><h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">联系我们</h1><p class="section-subtitle mx-auto">有疑问或需要报价？填写以下信息，我们将在24小时内回复您。</p></div></section><section class="py-20"><div class="section-container"><div class="grid lg:grid-cols-5 gap-12"><div class="lg:col-span-2 space-y-8"><div class="card p-6"><h3 class="font-bold text-bark-800 text-lg mb-6">联系方式</h3><ul class="space-y-5"><li class="flex items-start gap-4"><div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><p class="font-medium text-bark-800">邮箱</p><p class="text-bark-500 text-sm">info@yimeipackaging.com</p></div></li><li class="flex items-start gap-4"><div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><p class="font-medium text-bark-800">电话 </p><p class="text-bark-500 text-sm">+86 19042786974</p></div></li><li class="flex items-start gap-4"><div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><div><p class="font-medium text-bark-800">地址</p><p class="text-bark-500 text-sm">广西贺州钟山钟山大道与G232交叉处</p></div></li></ul></div><div class="card p-6 bg-honey-50 border-honey-200"><div class="flex items-center gap-3 mb-3"><svg class="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="font-bold text-bark-800">快速响应</h3></div><p class="text-bark-500 text-sm">我们通常在工作日24小时内回复。紧急询盘请通过WhatsApp联系我们。</p></div></div><div class="lg:col-span-3">`);
      _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-OoSD2dcW.js.map
