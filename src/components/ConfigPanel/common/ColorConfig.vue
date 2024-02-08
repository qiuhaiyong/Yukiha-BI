<template>
  <div class="color-config-container">
    <div class="color-config">
      <div class="color-config__title">
        <div class="title-left">颜色</div>
        <div class="title-right">操作</div>
      </div>
      <div class="color-item" v-for="(color, index) in colorList" :key="index">
        <div class="color-item-left">
          <el-color-picker
            :model-value="color"
            @change="(newColor: string | null) => colorChange(newColor, index)"
          /><span style="margin-left: 10px">{{ color }}</span>
        </div>
        <div class="color-item-right" @click="deleteColor(index)">
          <el-icon :size="25"><Close /></el-icon>
        </div>
      </div>
      <div class="color-add" @click="addColor">
        <el-icon :size="25"><Plus /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import useCanvasStore from '@/stores/modules/canvas'
import { formatter } from '@/utils/chartConfigMethod'
import stringify from 'json-stable-stringify'
import type { ECOption } from '@/components/Canvas/type'
import commonSetting from './commonSetting'
const canvasStore = useCanvasStore()
let { activeChartOption } = canvasStore
const colorList = ref<string[] | undefined>([])
if (activeChartOption) {
  // @ts-ignore
  colorList.value = activeChartOption.color
}

const colorChange = (newColor: string | null, index: number) => {
  if (colorList.value) {
    colorList.value[index] = newColor as string
  }
}

const deleteColor = (index: number) => {
  if (colorList.value) {
    colorList.value.splice(index, 1)
  }
}

const addColor = () => {
  if (colorList.value) {
    colorList.value.push('#ffffff')
  }
}

if (activeChartOption) {
  watch(activeChartOption, () => {
    if (canvasStore.activeChart)
      canvasStore.activeChart.option =
        'let option = ' + stringify(activeChartOption, { space: '  ' })
  })
}
</script>

<style scoped>
.color-config-container {
  padding: 15px;
  .color-config__title {
    display: flex;
    justify-content: space-between;
  }
  .color-item {
    display: flex;
    justify-content: space-between;
    .color-item-right {
      cursor: pointer;
    }
  }
  .color-add {
    cursor: pointer;
    text-align: center;
  }
}
</style>
