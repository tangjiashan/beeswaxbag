import { _ as _sfc_main$5, a as __nuxt_component_3 } from "./Footer-BF_klpe4.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Df8DkiWN.js";
import { mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext, defineComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$6 } from "./ProductCard-BCph1sMU.js";
import { f as factory3, a as factory2 } from "./factory2-HY-Ni9gG.js";
import { a as useSeoMeta } from "./v3-Gcgn0JnC.js";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/hookable/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/unctx/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/radix3/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/defu/dist/defu.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0 = "" + __buildAssetsURL("main.CqQ_TYqQ.png");
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center bg-gradient-to-br from-cream-50 via-honey-50 to-cream-100 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 bg-pattern opacity-50"></div><div class="absolute top-20 right-20 w-72 h-72 bg-honey-200/30 rounded-full blur-3xl animate-pulse-slow"></div><div class="absolute bottom-20 left-20 w-96 h-96 bg-honey-100/40 rounded-full blur-3xl"></div><div class="section-container relative z-10 py-24"><div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"><div class="animate-fade-in-up"><div class="inline-flex items-center gap-2 px-4 py-2 bg-honey-100 border border-honey-200 rounded-full text-sm font-medium text-honey-700 mb-6"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> 工厂直销 </div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-bark-800 leading-[1.15] mb-6"> 专业<span class="text-gradient">蜂蜡保鲜袋</span><br> 面包袋生产厂家 </h1><p class="text-lg md:text-xl text-bark-500 mb-8 max-w-lg leading-relaxed"> 支持OEM/ODM定制，15年生产经验，产品通过FDA食品级认证，远销全球30多个国家和地区。 </p><div class="flex flex-wrap gap-4 mb-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 浏览产品 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" 浏览产品 "),
          (openBlock(), createBlock("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "btn-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg> 联系我们 `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            })
          ])),
          createTextVNode(" 联系我们 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-wrap gap-6"><div class="flex items-center gap-2"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm text-bark-600">起订量 <span class="font-bold text-bark-800">200件</span></span></div><div class="flex items-center gap-2"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm text-bark-600"><span class="font-bold text-bark-800">FDA</span> 食品级认证</span></div><div class="flex items-center gap-2"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm text-bark-600">出口 <span class="font-bold text-bark-800">30+</span> 国家</span></div></div></div><div class="relative animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"><div class="rounded-3xl overflow-hidden shadow-2xl shadow-bark-300/20 relative"><img${ssrRenderAttr("src", _imports_0)} alt="蜂蜡保鲜袋产品展示" class="w-full h-[400px] md:h-[500px] object-cover"><div class="absolute inset-0 bg-gradient-to-t from-bark-800/30 to-transparent"></div></div><div class="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-lg animate-float"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-honey-100 rounded-full flex items-center justify-center"><svg class="w-5 h-5 text-honey-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div><div><p class="font-bold text-bark-800 text-sm">50+ 合作客户</p><p class="text-xs text-bark-500">覆盖 30+ 国家</p></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrustStats",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "30+", label: "出口国家" },
      { value: "50+", label: "合作客户" },
      { value: "200", label: "最低起订量（件）" },
      { value: "10+", label: "年生产经验" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-white" }, _attrs))}><div class="section-container"><div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"><!--[-->`);
      ssrRenderList(stats, (stat, i) => {
        _push(`<div class="animate-fade-in-up"><p class="text-4xl md:text-5xl font-bold text-gradient mb-2">${ssrInterpolate(stat.value)}</p><p class="text-bark-500 text-sm font-medium">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrustStats.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WhyChooseUs",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: "moq",
        title: "低起订量",
        description: "200件起订，小批量也能享受工厂价格，降低您的采购门槛。"
      },
      {
        icon: "oem",
        title: "全功能定制",
        description: "支持尺寸定制、LOGO丝印、包装设计定制，满足品牌个性化需求。"
      },
      {
        icon: "cert",
        title: "环保认证材料",
        description: "通过FDA、ISO9001、SGS等认证，使用天然蜂蜡和有机棉等环保材料。"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-gradient-to-b from-bark-50 to-white" }, _attrs))}><div class="section-container"><div class="text-center mb-14"><h2 class="section-title mb-4">为什么选择我们</h2><p class="section-subtitle mx-auto">十年专注环保包装，值得信赖的生产厂家</p></div><div class="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(features, (item, i) => {
        _push(`<div class="card p-8 text-center group hover:-translate-y-1"><div class="w-16 h-16 mx-auto mb-6 bg-honey-100 rounded-2xl flex items-center justify-center group-hover:bg-honey-200 transition-colors"><svg class="w-8 h-8 text-honey-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`);
        if (item.icon === "moq") {
          _push(`<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>`);
        } else if (item.icon === "oem") {
          _push(`<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>`);
        } else {
          _push(`<!--[--><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path><!--]-->`);
        }
        _push(`</svg></div><h3 class="font-bold text-xl text-bark-800 mb-3">${ssrInterpolate(item.title)}</h3><p class="text-bark-400 leading-relaxed">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhyChooseUs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        name: "张总",
        role: "跨境电商卖家 · 深圳",
        quote: "亿美的蜂蜡袋品质非常稳定，合作两年多从未出过问题。起订量灵活，对我们的新品牌很友好。"
      },
      {
        name: "李经理",
        role: "食品贸易商 · 杭州",
        quote: "定制LOGO的效果超出预期，丝印清晰牢固，客户反馈非常好。交货速度快，合作体验很棒。"
      },
      {
        name: "王总",
        role: "环保产品品牌方 · 上海",
        quote: "亿美的FDA认证和环保材料认证让我们的产品在国际市场上更有竞争力，是很靠谱的供应商。"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-white" }, _attrs))}><div class="section-container"><div class="text-center mb-14"><h2 class="section-title mb-4">客户评价</h2><p class="section-subtitle mx-auto">听听合作客户怎么说</p></div><div class="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(testimonials, (t, i) => {
        _push(`<div class="card p-8 hover:-translate-y-1"><div class="flex gap-1 text-honey-400 mb-4"><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(`<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`);
        });
        _push(`<!--]--></div><p class="text-bark-600 leading-relaxed mb-6 italic"> “${ssrInterpolate(t.quote)}” </p><div class="pt-4 border-t border-bark-100 flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gradient-to-br from-honey-300 to-honey-500 flex items-center justify-center text-white font-bold text-sm">${ssrInterpolate(t.name.charAt(0))}</div><div><p class="font-semibold text-bark-800 text-sm">${ssrInterpolate(t.name)}</p><p class="text-bark-400 text-xs">${ssrInterpolate(t.role)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const standard = "" + __buildAssetsURL("bee1.cz9icKLf.jpg");
const wraps = "" + __buildAssetsURL("beebag1.BeV4qcX8.jpg");
const custom = "" + __buildAssetsURL("breadbag1.CUtbHEdx.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productsList = [
      { id: 1, title: "蜂蜡面包袋 · 标准款", image: standard, description: "可重复使用的蜂蜡面包袋，L号。支持定制LOGO和包装。", href: "/products" },
      { id: 2, title: "蜂蜡保鲜膜 · 三件套", image: wraps, description: "多尺寸组合，食品级安全材质，可水洗重复使用。适合入门套装。", href: "/products" },
      { id: 3, title: "定制环保袋", image: custom, description: "定制尺寸和包装，支持批发OEM订单，满足品牌个性化需求。", href: "/products" }
    ];
    useSeoMeta({
      title: "亿美纺织 — 专业蜂蜡保鲜袋 & 面包袋生产厂家",
      description: "工厂直销蜂蜡保鲜袋、面包袋、食品收纳袋，支持OEM/ODM定制，15年生产经验，品质保障，快速发货。"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$5;
      const _component_Hero = __nuxt_component_1;
      const _component_TrustStats = _sfc_main$3;
      const _component_WhyChooseUs = _sfc_main$2;
      const _component_ProductCard = _sfc_main$6;
      const _component_Testimonials = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_TrustStats, null, null, _parent));
      _push(ssrRenderComponent(_component_WhyChooseUs, null, null, _parent));
      _push(`<section class="py-20 bg-gradient-to-b from-white to-bark-50"><div class="section-container"><div class="text-center mb-14"><h2 class="section-title mb-4">精选产品</h2><p class="section-subtitle mx-auto">涵盖蜂蜡保鲜袋、面包袋、食品收纳袋及定制款等环保包装产品</p></div><div class="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(productsList, (product) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.id,
          title: product.title,
          image: product.image,
          description: product.description,
          href: product.href
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="section-container"><div class="text-center mb-14"><h2 class="section-title mb-4">工厂实拍</h2><p class="section-subtitle mx-auto">现代化生产基地，每道工序严格品控</p></div><div class="grid sm:grid-cols-2 gap-8"><div class="relative rounded-2xl overflow-hidden group shadow-lg"><img${ssrRenderAttr("src", unref(factory3))} alt="生产线" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"><div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div><div class="absolute bottom-4 left-4 text-white"><p class="font-semibold">生产线</p><p class="text-sm text-white/80">自动化设备与流水线</p></div></div><div class="relative rounded-2xl overflow-hidden group shadow-lg"><img${ssrRenderAttr("src", unref(factory2))} alt="品质检测" class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"><div class="absolute inset-0 bg-gradient-to-t from-bark-800/50 to-transparent"></div><div class="absolute bottom-4 left-4 text-white"><p class="font-semibold">品质检测</p><p class="text-sm text-white/80">严格检验与测试</p></div></div></div></div></section><section class="py-20 bg-gradient-to-b from-bark-50 to-white"><div class="section-container"><div class="text-center mb-14"><h2 class="section-title mb-4">认证资质</h2><p class="section-subtitle mx-auto">产品通过国际食品级安全认证，符合环保标准</p></div><div class="max-w-3xl mx-auto"><div class="card p-8 flex flex-col sm:flex-row items-center gap-6"><div class="w-32 h-32 shrink-0 bg-gradient-to-br from-honey-100 to-honey-200 rounded-2xl flex items-center justify-center"><svg class="w-16 h-16 text-honey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><div class="text-center sm:text-left"><h3 class="font-bold text-xl text-bark-800 mb-2">FDA食品级认证</h3><p class="text-bark-400 leading-relaxed">所有原材料和蜂蜡涂层均符合FDA食品接触要求，可安全用于食品包装。</p><div class="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start"><span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> FDA认证 </span><span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> 食品级安全 </span><span class="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> 可降解环保 </span></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
      _push(`<section class="relative py-24 overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-bark-700 to-bark-800"></div><div class="absolute inset-0 bg-pattern opacity-10"></div><div class="absolute top-0 right-0 w-96 h-96 bg-honey-500/10 rounded-full blur-3xl"></div><div class="absolute bottom-0 left-0 w-72 h-72 bg-honey-400/10 rounded-full blur-3xl"></div><div class="section-container relative z-10 text-center"><h2 class="text-3xl md:text-5xl font-bold text-white mb-6">开启您的蜂蜡产品线</h2><p class="text-bark-200 text-lg max-w-xl mx-auto mb-10">获取报价、样品和定制方案，我们的团队24小时内回复。</p><div class="flex flex-wrap justify-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-2 px-8 py-4 bg-honey-500 text-white font-semibold rounded-xl shadow-lg shadow-honey-500/30 hover:bg-honey-400 hover:shadow-xl transition-all duration-300 text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg> 发送询盘 `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                })
              ])),
              createTextVNode(" 发送询盘 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 查看全部产品 `);
          } else {
            return [
              createTextVNode(" 查看全部产品 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-ByzdW_qW.js.map
