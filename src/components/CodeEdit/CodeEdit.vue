<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: 'calc(100vh - 287.54px)' }"
    :autofocus="false"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="changeHandler"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import useCanvasStore from '@/stores/modules/canvas'
import emitter from '@/utils/mitt'
const canvasStore = useCanvasStore()
const code = ref<string>(canvasStore.activeChart?.option as string)
const extensions = [javascript(), oneDark]
// codemirror组件实例
const view = shallowRef()
const handleReady = (payload: any) => {
  view.value = payload.view
}
watch(
  () => canvasStore.activeChart?.option,
  () => {
    if (canvasStore.activeChart) {
      code.value = canvasStore.activeChart.option as string
    }
  }
)
// 获取codemirror参数
const getCodemirrorStates = () => {
  const state = view.value.state
  const ranges = state.selection.ranges
  const selected = ranges.reduce((r: any, range: any) => r + range.to - range.from, 0)
  const cursor = ranges[0].anchor
  const length = state.doc.length
  const lines = state.doc.lines
}

//
const changeHandler = () => {}

//
const onFocus = () => {}

//
const onBlur = () => {}

onMounted(() => {
  // 绑定保存时 将编辑器代码保存到piana中
  emitter.on('saveChartOption', () => {
    if (code.value && canvasStore.activeChart) {
      canvasStore.activeChart.option = code.value
    }
  })
})
</script>

<style></style>
