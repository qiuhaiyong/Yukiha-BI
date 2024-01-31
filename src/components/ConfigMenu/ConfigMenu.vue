<template>
  <div class="config-menu-container">
    <el-tabs
      v-model="configTab"
      class="config-tabs"
      :stretch="true"
      v-if="canvasStore.activeChart ? true : false"
    >
      <el-tab-pane label="配置" name="config">
        <div class="config-size config-item">
          <div class="confoig-size__width">
            <div>宽度</div>
            <el-input-number
              controls-position="right"
              style="width: 100px"
              :model-value="canvasStore.activeChart?.w"
              :min="10"
              @change="
                (cur: number | undefined, prev: number | undefined) => handleChange(cur, prev, 'w')
              "
            />
          </div>
          <div class="confoig-size__height">
            <div>高度</div>
            <el-input-number
              controls-position="right"
              style="width: 100px"
              :model-value="canvasStore.activeChart?.h"
              :min="10"
              @change="
                (cur: number | undefined, prev: number | undefined) => handleChange(cur, prev, 'h')
              "
            />
          </div>
        </div>
        <div class="config-position config-item">
          <div class="confoig-position__x">
            <div>横坐标</div>
            <el-input-number
              controls-position="right"
              style="width: 100px"
              :model-value="canvasStore.activeChart?.x"
              @change="
                (cur: number | undefined, prev: number | undefined) => handleChange(cur, prev, 'x')
              "
            />
          </div>
          <div class="confoig-position__y">
            <div>纵坐标</div>
            <el-input-number
              controls-position="right"
              style="width: 100px"
              :model-value="canvasStore.activeChart?.y"
              @change="
                (cur: number | undefined, prev: number | undefined) => handleChange(cur, prev, 'y')
              "
            />
          </div>
        </div>
        <el-tabs v-model="viewOrJs" :stretch="true">
          <el-tab-pane label="视图" name="view">
            <PiePanel></PiePanel>
          </el-tab-pane>
          <el-tab-pane label="javascript" name="js">
            <CodeEdit></CodeEdit>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="数据" name="data">data</el-tab-pane>
    </el-tabs>
    <div v-else>大屏配置</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useCanvasStore from '@/stores/modules/canvas'
import emitter from '@/utils/mitt'
const canvasStore = useCanvasStore()
const configTab = ref('config')
const viewOrJs = ref('view')

// 实现数据双向绑定
const handleChange = (cur: number | undefined, prev: number | undefined, type: string) => {
  if (canvasStore.activeChart && cur) {
    switch (type) {
      case 'w':
        canvasStore.activeChart.w = cur as number
        break
      case 'h':
        canvasStore.activeChart.h = cur as number
        break
      case 'x':
        canvasStore.activeChart.x = cur as number
        break
      case 'y':
        canvasStore.activeChart.y = cur as number
        break
      default:
        break
    }
  }
}

onMounted(() => {
  emitter.on('changeActiveChart', () => {
    configTab.value = 'config'
    viewOrJs.value = 'view'
  })
})
</script>

<style scoped>
.config-menu-container {
  --config-menu-width: 300px;
}
.config-menu-container {
  width: var(--config-menu-width);
  .config-item {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .js-config-menu {
    overflow: auto;
  }
}
</style>
