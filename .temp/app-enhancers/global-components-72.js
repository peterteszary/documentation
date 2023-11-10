import Vue from 'vue'
Vue.component("demo-component", () => import("/home/peterteszary/Documents/GitHub/helper/helper/docs/src/.vuepress/components/demo-component"))
Vue.component("OtherComponent", () => import("/home/peterteszary/Documents/GitHub/helper/helper/docs/src/.vuepress/components/OtherComponent"))
Vue.component("Foo-Bar", () => import("/home/peterteszary/Documents/GitHub/helper/helper/docs/src/.vuepress/components/Foo/Bar"))
Vue.component("Badge", () => import("/home/peterteszary/Documents/GitHub/helper/helper/docs/node_modules/@vuepress/theme-default/global-components/Badge"))
Vue.component("CodeBlock", () => import("/home/peterteszary/Documents/GitHub/helper/helper/docs/node_modules/@vuepress/theme-default/global-components/CodeBlock"))
Vue.component("CodeGroup", () => import("/home/peterteszary/Documents/GitHub/helper/helper/docs/node_modules/@vuepress/theme-default/global-components/CodeGroup"))


export default {}