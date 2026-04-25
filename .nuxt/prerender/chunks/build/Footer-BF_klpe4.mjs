import { _ as __nuxt_component_0 } from './nuxt-link-Df8DkiWN.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, useSSRContext } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/server-renderer/index.mjs';
import { u as useRoute, _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const mobileOpen = ref(false);
    const scrolled = ref(false);
    const navItems = [
      { label: "\u9996\u9875", path: "/" },
      { label: "\u4EA7\u54C1\u4E2D\u5FC3", path: "/products" },
      { label: "\u5173\u4E8E\u6211\u4EEC", path: "/about" },
      { label: "\u8054\u7CFB\u6211\u4EEC", path: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          unref(scrolled) ? "h-16 md:h-[72px] bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.04)] border-b border-bark-100/60" : "h-16 md:h-20 bg-gradient-to-b from-white/80 to-transparent"
        ]
      }, _attrs))}><div class="${ssrRenderClass([unref(scrolled) ? "opacity-0" : "opacity-100", "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey-400/40 to-transparent transition-opacity duration-500"])}"></div><div class="section-container h-full flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><div class="w-10 h-10 bg-gradient-to-br from-honey-400 to-honey-500 rounded-xl flex items-center justify-center shadow-md shadow-honey-500/20 group-hover:shadow-lg group-hover:shadow-honey-500/30 transition-all duration-300"${_scopeId}><svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"${_scopeId}></path></svg></div></div><div class="flex flex-col"${_scopeId}><span class="font-bold text-lg leading-tight text-bark-800 tracking-tight"${_scopeId}><span class="text-honey-500"${_scopeId}>\u4EBF\u7F8E\u7EBA\u7EC7</span></span><span class="text-[10px] leading-tight text-bark-400 font-medium tracking-widest uppercase"${_scopeId}>YiMei Textile</span></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "w-10 h-10 bg-gradient-to-br from-honey-400 to-honey-500 rounded-xl flex items-center justify-center shadow-md shadow-honey-500/20 group-hover:shadow-lg group-hover:shadow-honey-500/30 transition-all duration-300" }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-5 h-5 text-white",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    createVNode("path", { d: "M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" })
                  ]))
                ])
              ]),
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "font-bold text-lg leading-tight text-bark-800 tracking-tight" }, [
                  createVNode("span", { class: "text-honey-500" }, "\u4EBF\u7F8E\u7EBA\u7EC7")
                ]),
                createVNode("span", { class: "text-[10px] leading-tight text-bark-400 font-medium tracking-widest uppercase" }, "YiMei Textile")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-1"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: ["relative px-3.5 py-2 text-sm font-medium text-bark-500 rounded-lg transition-all duration-200 hover:text-bark-800", { "text-bark-800": unref(route).path === item.path }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative z-10"${_scopeId}>${ssrInterpolate(item.label)}</span><span class="absolute inset-0 rounded-lg bg-honey-50 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"${_scopeId}></span><span class="${ssrRenderClass([unref(route).path === item.path ? "w-5" : "w-0 group-hover:w-4", "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-honey-500 transition-all duration-300"])}"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", { class: "relative z-10" }, toDisplayString(item.label), 1),
                createVNode("span", { class: "absolute inset-0 rounded-lg bg-honey-50 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100" }),
                createVNode("span", {
                  class: ["absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-honey-500 transition-all duration-300", unref(route).path === item.path ? "w-5" : "w-0 group-hover:w-4"]
                }, null, 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary text-sm px-5 py-2.5 hidden md:inline-flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u514D\u8D39\u83B7\u53D6\u62A5\u4EF7 <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" \u514D\u8D39\u83B7\u53D6\u62A5\u4EF7 "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5",
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
      _push(`<button class="md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center text-bark-600 hover:text-honey-600 hover:bg-honey-50 transition-all duration-200" aria-label="\u83DC\u5355"><span class="sr-only">Toggle menu</span><div class="w-5 h-4 relative flex flex-col justify-between"><span class="${ssrRenderClass([unref(mobileOpen) ? "rotate-45 translate-y-[6px]" : "", "block w-full h-0.5 bg-current rounded-full origin-center transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(mobileOpen) ? "opacity-0 scale-0" : "", "block w-full h-0.5 bg-current rounded-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(mobileOpen) ? "-rotate-45 -translate-y-[6px]" : "", "block w-full h-0.5 bg-current rounded-full origin-center transition-all duration-300"])}"></span></div></button></div></div>`);
      if (unref(mobileOpen)) {
        _push(`<div class="fixed inset-0 bg-bark-800/20 backdrop-blur-sm z-[-1]"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mobileOpen)) {
        _push(`<div class="md:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-bark-800/10 border border-bark-100/50 overflow-hidden"><div class="p-2"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.path,
            to: item.path,
            class: ["flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-bark-600 hover:text-bark-800 hover:bg-honey-50/80 transition-all duration-200", { "text-bark-800 bg-honey-50": unref(route).path === item.path }],
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="${ssrRenderClass([unref(route).path === item.path ? "bg-honey-500" : "bg-bark-200", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createVNode("span", {
                    class: ["w-1.5 h-1.5 rounded-full", unref(route).path === item.path ? "bg-honey-500" : "bg-bark-200"]
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="p-3 pt-0">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "btn-primary text-sm w-full justify-center",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u514D\u8D39\u83B7\u53D6\u62A5\u4EF7 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" \u514D\u8D39\u83B7\u53D6\u62A5\u4EF7 "),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4",
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-bark-800 text-bark-200" }, _attrs))}><div class="section-container"><div class="md:grid md:grid-cols-4 gap-10 py-14"><div class="md:col-span-1"><div class="flex items-center gap-2.5 mb-4"><div class="w-10 h-10 bg-gradient-to-br from-honey-400 to-honey-600 rounded-xl flex items-center justify-center"><svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"></path></svg></div><span class="font-bold text-xl text-white"><span class="text-honey-400">\u4EBF\u7F8E\u7EBA\u7EC7</span></span></div><p class="text-bark-300 text-sm leading-relaxed"> \u4E13\u4E1A\u8702\u8721\u4FDD\u9C9C\u888B\u3001\u9762\u5305\u888B\u3001\u98DF\u54C1\u6536\u7EB3\u888B\u751F\u4EA7\u5382\u5BB6\uFF0C\u652F\u6301OEM/ODM\u5B9A\u5236\uFF0C\u4EA7\u54C1\u8FDC\u9500\u5168\u740330\u591A\u4E2A\u56FD\u5BB6\u548C\u5730\u533A\u3002 </p></div><div><h4 class="font-semibold text-white mb-4">\u4EA7\u54C1\u4E2D\u5FC3</h4><ul class="space-y-2 text-sm"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "hover:text-honey-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8702\u8721\u4FDD\u9C9C\u888B`);
      } else {
        return [
          createTextVNode("\u8702\u8721\u4FDD\u9C9C\u888B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "hover:text-honey-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u9762\u5305\u888B`);
      } else {
        return [
          createTextVNode("\u9762\u5305\u888B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "hover:text-honey-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u98DF\u54C1\u6536\u7EB3\u888B`);
      } else {
        return [
          createTextVNode("\u98DF\u54C1\u6536\u7EB3\u888B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products",
    class: "hover:text-honey-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5B9A\u5236\u6B3E`);
      } else {
        return [
          createTextVNode("\u5B9A\u5236\u6B3E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h4 class="font-semibold text-white mb-4">\u5173\u4E8E\u516C\u53F8</h4><ul class="space-y-2 text-sm"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "hover:text-honey-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5173\u4E8E\u6211\u4EEC`);
      } else {
        return [
          createTextVNode("\u5173\u4E8E\u6211\u4EEC")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "hover:text-honey-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8054\u7CFB\u6211\u4EEC`);
      } else {
        return [
          createTextVNode("\u8054\u7CFB\u6211\u4EEC")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="#" class="hover:text-honey-400 transition-colors">1688\u5E97\u94FA</a></li></ul></div><div><h4 class="font-semibold text-white mb-4">\u8054\u7CFB\u65B9\u5F0F</h4><ul class="space-y-3 text-sm"><li class="flex items-center gap-2"><svg class="w-4 h-4 text-honey-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>info@yimeipackaging.com</span></li><li class="flex items-center gap-2"><svg class="w-4 h-4 text-honey-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.45 11.45 0 006.243 6.243l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span>+86-19042786974</span></li><li class="flex items-start gap-2"><svg class="w-4 h-4 text-honey-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>\u5E7F\u897F\u8D3A\u5DDE\u949F\u5C71\u949F\u5C71\u5927\u9053\u4E0EG232\u4EA4\u53C9\u5904</span></li></ul></div></div><div class="border-t border-bark-700 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-bark-400"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} \u5E7F\u897F\u4EBF\u7F8E\u7EBA\u7EC7\u6709\u9650\u516C\u53F8 \u7248\u6743\u6240\u6709</p><div class="flex gap-4"><a href="#" class="hover:text-honey-400 transition-colors">\u9690\u79C1\u653F\u7B56</a><a href="#" class="hover:text-honey-400 transition-colors">\u4F7F\u7528\u6761\u6B3E</a></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _sfc_main$1 as _, __nuxt_component_3 as a };
//# sourceMappingURL=Footer-BF_klpe4.mjs.map
