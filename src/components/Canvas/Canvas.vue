<template>
  <div class="canvas-container" ref="canvas">
    <div class="canvas-main" :style="canvasStyle">
      <vue-draggable-resizable
        :scale="screen.with >= 1900 ? 0.8 : 0.7"
        :parent="true"
        v-for="(chart, index) in canvasStore.chartList"
        :key="index"
        v-bind="chart"
        :preventDeactivation="isOutside"
        @activated="onActivated(chart as ChartOption)"
        @deactivated="onDeactivated"
        :onDrag="(x: number, y: number) => onDrag(x, y, chart.id as string)"
        :onResize="
          (handle: string[], x: number, y: number, w: number, h: number) =>
            onResize(handle, x, y, w, h, chart.id as string)
        "
      >
        <div :style="{ width: `${chart.w}px`, height: `${chart.h}px` }">
          <v-chart :option="formatter(chart.option as string)" :autoresize="true" />
        </div>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import useCanvasStore from '@/stores/modules/canvas'
import type { ChartOption } from './type'
import { useMouseInElement } from '@vueuse/core'
import VChart from 'vue-echarts'
import { formatter } from '@/utils/chartConfigMethod'
import emitter from '@/utils/mitt'
const canvasStore = useCanvasStore()
const canvas = ref<null | HTMLElement>(null)
const { isOutside } = useMouseInElement(canvas)
const screen = computed(() => {
  return {
    with: window.screen.width,
    height: window.screen.height
  }
})
const canvasStyle = reactive({
  transform: `scale(${screen.value.with >= 1920 ? 0.8 : 0.7})`,
  transformOrigin: 'left top',
  top: '60px',
  left: `${screen.value.with >= 1920 ? '60px' : '45px'}`,
  width: '1920px',
  height: '1080px',
  backgroundColor: 'rgb(14, 42, 67)',
  borderRadius: '8px'
})

const onDrag = (x: number, y: number, id: string) => {
  const chartOption = canvasStore.chartList.find((item) => item.id === id)
  if (chartOption) {
    chartOption.x = x
    chartOption.y = y
  }
}
const onResize = (handle: string[], x: number, y: number, w: number, h: number, id: string) => {
  const chartOption = canvasStore.chartList.find((item) => item.id === id)
  if (chartOption) {
    chartOption.x = x
    chartOption.y = y
    chartOption.w = w
    chartOption.h = h
  }
}

const onActivated = (activeChart: ChartOption) => {
  canvasStore.setActiveChart(activeChart)
}

const onDeactivated = () => {
  // 移除pinia中的选中图表数据
  canvasStore.removeActiveChart()
  // 触发改变选中图表事件
  emitter.emit('changeActiveChart')
}
</script>

<style scoped>
.canvas-container {
  --left-width: 160px;
  --right-width: 300px;
}
.canvas-container {
  width: calc(100vw - var(--left-width) - var(--right-width));
  height: calc(100vh - 60px);
  background: url('../../assets/img/components/canvas/bgc.png') repeat;
  position: relative;
  .active {
    border: 1px solid var(--yu-border-color);
  }
  .canvas-main {
    position: absolute;
  }
}
</style>
