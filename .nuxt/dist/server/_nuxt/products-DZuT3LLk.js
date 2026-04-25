import { _ as _sfc_main$1, a as __nuxt_component_3 } from "./Footer-BF_klpe4.js";
import { _ as _sfc_main$2 } from "./ProductCard-BCph1sMU.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Df8DkiWN.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { a as useSeoMeta } from "./v3-Gcgn0JnC.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/hookable/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/unctx/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/radix3/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/defu/dist/defu.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/ufo/dist/index.mjs";
import "/Users/tangjiashan/Desktop/website/yimei/node_modules/@unhead/vue/dist/index.mjs";
const standard = "" + __buildAssetsURL("bee2.DMk3_0Wk.jpg");
const wraps = "" + __buildAssetsURL("breadbag2.XJq_2VpA.jpg");
const custom = "" + __buildAssetsURL("beebag2.CTsaQr_F.jpg");
const _sfc_main = {
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      { id: 1, title: "蜂蜡面包袋 · 标准款", image: standard, description: "可重复使用的蜂蜡面包袋，L号。支持定制LOGO和包装。", href: "/contact" },
      { id: 2, title: "蜂蜡保鲜膜 · 三件套", image: wraps, description: "多尺寸组合，食品级安全材质，可水洗重复使用。适合入门套装。", href: "/contact" },
      { id: 3, title: "定制环保袋", image: custom, description: "定制尺寸和包装，支持批发OEM订单，满足品牌个性化需求。", href: "/contact" }
    ];
    useSeoMeta({
      title: "产品中心 — 蜂蜡保鲜袋 | 面包袋 | 亿美纺织",
      description: "浏览亿美纺织全系列产品：蜂蜡保鲜袋、面包袋、食品收纳袋、定制款，工厂直销，支持OEM/ODM定制。"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      const _component_ProductCard = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="pt-32 pb-16 bg-gradient-to-b from-bark-50 to-white"><div class="section-container text-center"><h1 class="text-4xl md:text-5xl font-bold text-bark-800 mb-4">产品中心</h1><p class="section-subtitle mx-auto">蜂蜡保鲜袋、面包袋、食品收纳袋及定制款，支持OEM定制，低起订量</p></div></section><section class="py-20"><div class="section-container"><div class="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.id,
          title: product.title,
          image: product.image,
          description: product.description,
          href: product.href
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-honey-50"><div class="section-container text-center"><h2 class="text-2xl font-bold text-bark-800 mb-3">需要定制？</h2><p class="text-bark-500 mb-6">我们可以为您量身定制蜂蜡产品，满足您的品牌和需求。</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 获取定制报价 `);
          } else {
            return [
              createTextVNode(" 获取定制报价 ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=products-DZuT3LLk.js.map
