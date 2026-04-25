import { _ as _sfc_main$1$1, a as __nuxt_component_3 } from './Footer-BF_klpe4.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/server-renderer/index.mjs';
import { u as useSeoMeta } from './v3-Gcgn0JnC.mjs';
import './nuxt-link-Df8DkiWN.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/destr/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/hookable/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/ohash/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/klona/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/defu/dist/defu.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/scule/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unctx/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/pathe/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unhead/dist/server.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/devalue/index.js';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue-router/vue-router.node.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card p-8" }, _attrs))}><h3 class="text-2xl font-bold text-bark-800 mb-2">\u53D1\u9001\u8BE2\u76D8</h3><p class="text-bark-400 text-sm mb-6">\u586B\u5199\u4EE5\u4E0B\u4FE1\u606F\uFF0C\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u56DE\u590D\u60A8\u3002</p><form class="space-y-5"><div class="grid sm:grid-cols-2 gap-5"><div><label class="label">\u59D3\u540D <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="input-field" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D">`);
      if (unref(errors).name) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label">\u90AE\u7BB1 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="input-field" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1">`);
      if (unref(errors).email) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><label class="label">\u7535\u8BDD </label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" class="input-field" placeholder="\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD">`);
      if (unref(errors).phone) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label">\u516C\u53F8\u540D\u79F0</label><input${ssrRenderAttr("value", unref(form).company)} type="text" class="input-field" placeholder="\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"></div><div><label class="label">\u9700\u6C42\u63CF\u8FF0 <span class="text-red-500">*</span></label><textarea rows="5" class="input-field resize-none" placeholder="\u8BF7\u63CF\u8FF0\u60A8\u7684\u9700\u6C42\uFF08\u4EA7\u54C1\u79CD\u7C7B\u3001\u6570\u91CF\u3001\u5B9A\u5236\u8981\u6C42\u7B49\uFF09">${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(errors).message) {
        _push(`<p class="text-red-500 text-xs mt-1">${ssrInterpolate(unref(errors).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-3"><button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""}>${ssrInterpolate(unref(submitted) ? "\u5DF2\u63D0\u4EA4 \u2713" : unref(submitting) ? "\u63D0\u4EA4\u4E2D..." : "\u63D0\u4EA4\u8BE2\u76D8")}</button><button type="button" class="btn-secondary">\u91CD\u7F6E</button></div>`);
      if (unref(submitError)) {
        _push(`<div class="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">${ssrInterpolate(unref(submitError))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(submitted)) {
        _push(`<div class="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium"> \u63D0\u4EA4\u6210\u529F\uFF01\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u4E0E\u60A8\u8054\u7CFB\u3002 </div>`);
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
      title: "\u8054\u7CFB\u6211\u4EEC \u2014 \u4EBF\u7F8E\u5305\u88C5\u5236\u54C1\u6709\u9650\u516C\u53F8",
      description: "\u8054\u7CFB\u4EBF\u7F8E\u5305\u88C5\u83B7\u53D6\u514D\u8D39\u6837\u54C1\u548C\u62A5\u4EF7\uFF0C\u5DE5\u5382\u76F4\u9500\u8702\u8721\u4FDD\u9C9C\u888B\u3001\u9762\u5305\u888B\u3001\u98DF\u54C1\u6536\u7EB3\u888B\uFF0C\u652F\u6301OEM/ODM\u5B9A\u5236\u3002"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1$1;
      const _component_ContactForm = _sfc_main$1;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white"><div class="section-container text-center"><h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">\u8054\u7CFB\u6211\u4EEC</h1><p class="section-subtitle mx-auto">\u6709\u7591\u95EE\u6216\u9700\u8981\u62A5\u4EF7\uFF1F\u586B\u5199\u4EE5\u4E0B\u4FE1\u606F\uFF0C\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u56DE\u590D\u60A8\u3002</p></div></section><section class="py-20"><div class="section-container"><div class="grid lg:grid-cols-5 gap-12"><div class="lg:col-span-2 space-y-8"><div class="card p-6"><h3 class="font-bold text-bark-800 text-lg mb-6">\u8054\u7CFB\u65B9\u5F0F</h3><ul class="space-y-5"><li class="flex items-start gap-4"><div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><p class="font-medium text-bark-800">\u90AE\u7BB1</p><p class="text-bark-500 text-sm">info@yimeipackaging.com</p></div></li><li class="flex items-start gap-4"><div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><p class="font-medium text-bark-800">\u7535\u8BDD </p><p class="text-bark-500 text-sm">+86 19042786974</p></div></li><li class="flex items-start gap-4"><div class="w-10 h-10 bg-honey-100 rounded-xl flex items-center justify-center shrink-0"><svg class="w-5 h-5 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><div><p class="font-medium text-bark-800">\u5730\u5740</p><p class="text-bark-500 text-sm">\u5E7F\u897F\u8D3A\u5DDE\u949F\u5C71\u949F\u5C71\u5927\u9053\u4E0EG232\u4EA4\u53C9\u5904</p></div></li></ul></div><div class="card p-6 bg-honey-50 border-honey-200"><div class="flex items-center gap-3 mb-3"><svg class="w-6 h-6 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="font-bold text-bark-800">\u5FEB\u901F\u54CD\u5E94</h3></div><p class="text-bark-500 text-sm">\u6211\u4EEC\u901A\u5E38\u5728\u5DE5\u4F5C\u65E524\u5C0F\u65F6\u5185\u56DE\u590D\u3002\u7D27\u6025\u8BE2\u76D8\u8BF7\u901A\u8FC7WhatsApp\u8054\u7CFB\u6211\u4EEC\u3002</p></div></div><div class="lg:col-span-3">`);
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

export { _sfc_main as default };
//# sourceMappingURL=contact-OoSD2dcW.mjs.map
