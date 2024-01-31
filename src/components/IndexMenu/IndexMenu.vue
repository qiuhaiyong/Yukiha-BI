<template>
  <div class="index-menu-container">
    <div
      class="index-menu__item"
      v-for="chart in canvasStore.chartList"
      :class="{ ['is-active']: chart.id === canvasStore.activeChart?.id }"
      @click="clickHandler(chart as ChartOption)"
    >
      <div class="item-icon">
        <el-icon style="vertical-align: middle" :size="20">
          <Fries />
        </el-icon>
      </div>
      <div class="item-name">{{ chart.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCanvasStore from '@/stores/modules/canvas'
import type { ChartOption } from '@/components/Canvas/type'
const canvasStore = useCanvasStore()
const clickHandler = (chart: ChartOption) => {
  // canvasStore.setActiveChart(chart)
}
</script>

<style scoped>
.index-menu-container {
  --component-menu-height: 60px;
  --index-menu-width: 160px;
}
.index-menu-container {
  width: var(--index-menu-width);
  height: calc(100vh - var(--component-menu-height));
  overflow: auto;
  border-right: var(--yu-border);
  &::-webkit-scrollbar {
    display: none;
  }
  .index-menu__item {
    height: 50px;
    display: flex;
    padding: 10px;
    gap: 10px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    .item-icon {
      width: 50px;
      height: 30px;
      background-color: var(--yu-hover-bg-color);
    }
    .item-name {
      line-height: 33px;
    }
  }

  .index-menu__item:hover {
    background: linear-gradient(to right, var(--yu-hover-bg-color), #ffffff);
    color: var(--yu-hover-text-color);
  }
  .is-active {
    background: linear-gradient(to right, var(--yu-hover-bg-color), #ffffff);
    color: var(--yu-hover-text-color);
  }
}
</style>
