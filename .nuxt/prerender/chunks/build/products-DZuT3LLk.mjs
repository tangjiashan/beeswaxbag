import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as _sfc_main$1, a as __nuxt_component_3 } from './Footer-BF_klpe4.mjs';
import { _ as _sfc_main$2 } from './ProductCard-BCph1sMU.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Df8DkiWN.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue/server-renderer/index.mjs';
import { u as useSeoMeta } from './v3-Gcgn0JnC.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/h3/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/destr/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/hookable/dist/index.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/ofetch/dist/node.mjs';
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
import './server.mjs';
import 'file:///Users/tangjiashan/Desktop/website/yimei/node_modules/vue-router/vue-router.node.mjs';

const standard = "" + buildAssetsURL("bee2.DMk3_0Wk.jpg");
const wraps = "" + buildAssetsURL("breadbag2.XJq_2VpA.jpg");
const custom = "" + buildAssetsURL("beebag2.CTsaQr_F.jpg");
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      { id: 1, title: "\u8702\u8721\u9762\u5305\u888B \xB7 \u6807\u51C6\u6B3E", image: standard, description: "\u53EF\u91CD\u590D\u4F7F\u7528\u7684\u8702\u8721\u9762\u5305\u888B\uFF0CL\u53F7\u3002\u652F\u6301\u5B9A\u5236LOGO\u548C\u5305\u88C5\u3002", href: "/contact" },
      { id: 2, title: "\u8702\u8721\u4FDD\u9C9C\u819C \xB7 \u4E09\u4EF6\u5957", image: wraps, description: "\u591A\u5C3A\u5BF8\u7EC4\u5408\uFF0C\u98DF\u54C1\u7EA7\u5B89\u5168\u6750\u8D28\uFF0C\u53EF\u6C34\u6D17\u91CD\u590D\u4F7F\u7528\u3002\u9002\u5408\u5165\u95E8\u5957\u88C5\u3002", href: "/contact" },
      { id: 3, title: "\u5B9A\u5236\u73AF\u4FDD\u888B", image: custom, description: "\u5B9A\u5236\u5C3A\u5BF8\u548C\u5305\u88C5\uFF0C\u652F\u6301\u6279\u53D1OEM\u8BA2\u5355\uFF0C\u6EE1\u8DB3\u54C1\u724C\u4E2A\u6027\u5316\u9700\u6C42\u3002", href: "/contact" }
    ];
    useSeoMeta({
      title: "\u4EA7\u54C1\u4E2D\u5FC3 \u2014 \u8702\u8721\u4FDD\u9C9C\u888B | \u9762\u5305\u888B | \u4EBF\u7F8E\u7EBA\u7EC7",
      description: "\u6D4F\u89C8\u4EBF\u7F8E\u7EBA\u7EC7\u5168\u7CFB\u5217\u4EA7\u54C1\uFF1A\u8702\u8721\u4FDD\u9C9C\u888B\u3001\u9762\u5305\u888B\u3001\u98DF\u54C1\u6536\u7EB3\u888B\u3001\u5B9A\u5236\u6B3E\uFF0C\u5DE5\u5382\u76F4\u9500\uFF0C\u652F\u6301OEM/ODM\u5B9A\u5236\u3002"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      const _component_ProductCard = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white"><div class="section-container text-center"><h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">\u4EA7\u54C1\u4E2D\u5FC3</h1><p class="section-subtitle mx-auto">\u8702\u8721\u4FDD\u9C9C\u888B\u3001\u9762\u5305\u888B\u3001\u98DF\u54C1\u6536\u7EB3\u888B\u53CA\u5B9A\u5236\u6B3E\uFF0C\u652F\u6301OEM\u5B9A\u5236\uFF0C\u4F4E\u8D77\u8BA2\u91CF</p></div></section><section class="py-20"><div class="section-container"><div class="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.id,
          title: product.title,
          image: product.image,
          description: product.description,
          href: product.href
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-honey-50"><div class="section-container text-center"><h2 class="text-2xl font-bold text-bark-800 mb-3">\u9700\u8981\u5B9A\u5236\uFF1F</h2><p class="text-bark-500 mb-6">\u6211\u4EEC\u53EF\u4EE5\u4E3A\u60A8\u91CF\u8EAB\u5B9A\u5236\u8702\u8721\u4EA7\u54C1\uFF0C\u6EE1\u8DB3\u60A8\u7684\u54C1\u724C\u548C\u9700\u6C42\u3002</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u83B7\u53D6\u5B9A\u5236\u62A5\u4EF7 `);
          } else {
            return [
              createTextVNode(" \u83B7\u53D6\u5B9A\u5236\u62A5\u4EF7 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=products-DZuT3LLk.mjs.map
