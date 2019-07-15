import Vue from 'vue'
import './plugins/element'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/base.less' // 公用样式
Vue.config.productionTip = false
Vue.prototype.$store = store
// 全局注册compoments下的公用组件
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/personalComputer', // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式, 这里可以匹配的文件名为index.js
  /index.js/
)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  // eslint-disable-next-line
  let componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 取components目录下的文件的文件名作为组件名
  componentName = componentName.replace(/([/][^/]+)$/, '')
  // const componentName = upperFirst(
  //   // eslint-disable-next-line
  //   camelCase(
  //     // 剥去文件名开头的 `'./` 和结尾的扩展名
  //     fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  //   )
  // )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
const requireComponentMobile = require.context(
  // 其组件目录的相对路径
  './components/mobile', // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式, 这里可以匹配的文件名为index.js
  /index.js/
)
requireComponentMobile.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  // eslint-disable-next-line
  let componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 取components目录下的文件的文件名作为组件名
  componentName = componentName.replace(/([/][^/]+)$/, '')
  // const componentName = upperFirst(
  //   // eslint-disable-next-line
  //   camelCase(
  //     // 剥去文件名开头的 `'./` 和结尾的扩展名
  //     fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  //   )
  // )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
