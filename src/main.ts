import './style/index.css'

import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import 'default-passive-events'
import 'echarts'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// @ts-ignore
import VueDraggableResizable from 'vue-draggable-resizable'
import GlobalComponent from './components/index'

const app = createApp(App)

// 引入拖动组件

// 引入element-plus组件
app.use(ElementPlus, {
  locale: zhCn
})
// 注册element-plus icon组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('vue-draggable-resizable', VueDraggableResizable)
app.use(GlobalComponent)
app.use(pinia)
app.use(router)

app.mount('#app')
