import type { App, Component } from 'vue'
import ComponentMenu from './ComponentMenu/ComponentMenu.vue'
import IndexMenu from './IndexMenu/IndexMenu.vue'
import Canvas from './Canvas/Canvas.vue'
import ConfigMenu from './ConfigMenu/ConfigMenu.vue'
import CodeEdit from './CodeEdit/CodeEdit.vue'
import TitleConfig from './ConfigPanel/common/TitleConfig.vue'
import LegendConfig from './ConfigPanel/common/LegendConfig.vue'
import PiePanel from './ConfigPanel/PiePanel/PiePanel.vue'
// 全局组件对象
const allGlobalComponent: Record<string, Component> = {
  ComponentMenu,
  IndexMenu,
  Canvas,
  ConfigMenu,
  CodeEdit,
  TitleConfig,
  LegendConfig,
  PiePanel
}
// 全局组件注册插件
export default {
  install(app: App) {
    // 注册项目的全部全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
