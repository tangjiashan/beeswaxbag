import { _ as __nuxt_component_0 } from './nuxt-link-Df8DkiWN.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    image: {},
    description: {},
    href: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.href,
        class: "group card block overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden h-56 bg-bark-50"${_scopeId}>`);
            if (__props.image) {
              _push2(`<img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${ssrRenderAttr("onerror", `this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23f5f0eb%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%23b5a488%22 font-size=%2216%22 dy=%22.3em%22>${encodeURIComponent(__props.title)}</text></svg>'`)}${_scopeId}>`);
            } else {
              _push2(`<div class="w-full h-full bg-gradient-to-br from-honey-100 to-cream-200 flex items-center justify-center"${_scopeId}><span class="text-bark-300 text-sm"${_scopeId}>${ssrInterpolate(__props.title)}</span></div>`);
            }
            _push2(`<div class="absolute inset-0 bg-gradient-to-t from-bark-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"${_scopeId}><div class="absolute bottom-4 left-4 text-white animate-fade-in-up"${_scopeId}><span class="text-sm font-medium"${_scopeId}>\u67E5\u770B\u8BE6\u60C5</span><svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg></div></div></div><div class="p-5"${_scopeId}><h3 class="font-bold text-lg text-bark-800 group-hover:text-honey-600 transition-colors"${_scopeId}>${ssrInterpolate(__props.title)}</h3><p class="text-bark-400 text-sm mt-2 leading-relaxed"${_scopeId}>${ssrInterpolate(__props.description)}</p><div class="mt-3 flex items-center justify-between"${_scopeId}><span class="text-honey-600 font-semibold text-sm"${_scopeId}>\u83B7\u53D6\u62A5\u4EF7</span><span class="opacity-0 group-hover:opacity-100 transition-opacity text-honey-500 text-sm font-medium"${_scopeId}> \u7ACB\u5373\u54A8\u8BE2 \u2192 </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden h-56 bg-bark-50" }, [
                __props.image ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: __props.image,
                  alt: __props.title,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                  onerror: `this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23f5f0eb%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%23b5a488%22 font-size=%2216%22 dy=%22.3em%22>${encodeURIComponent(__props.title)}</text></svg>'`
                }, null, 8, ["src", "alt", "onerror"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full h-full bg-gradient-to-br from-honey-100 to-cream-200 flex items-center justify-center"
                }, [
                  createVNode("span", { class: "text-bark-300 text-sm" }, toDisplayString(__props.title), 1)
                ])),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-bark-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }, [
                  createVNode("div", { class: "absolute bottom-4 left-4 text-white animate-fade-in-up" }, [
                    createVNode("span", { class: "text-sm font-medium" }, "\u67E5\u770B\u8BE6\u60C5"),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 inline ml-1",
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
                  ])
                ])
              ]),
              createVNode("div", { class: "p-5" }, [
                createVNode("h3", { class: "font-bold text-lg text-bark-800 group-hover:text-honey-600 transition-colors" }, toDisplayString(__props.title), 1),
                createVNode("p", { class: "text-bark-400 text-sm mt-2 leading-relaxed" }, toDisplayString(__props.description), 1),
                createVNode("div", { class: "mt-3 flex items-center justify-between" }, [
                  createVNode("span", { class: "text-honey-600 font-semibold text-sm" }, "\u83B7\u53D6\u62A5\u4EF7"),
                  createVNode("span", { class: "opacity-0 group-hover:opacity-100 transition-opacity text-honey-500 text-sm font-medium" }, " \u7ACB\u5373\u54A8\u8BE2 \u2192 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProductCard-BCph1sMU.mjs.map
