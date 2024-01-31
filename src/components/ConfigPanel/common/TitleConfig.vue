<template>
  <div class="title-config">
    <div class="title-config__item">
      <div class="title-config__item__title">显示/隐藏</div>
      <div class="title-config__item__config">
        <el-switch
          v-model="showTitle"
          inline-prompt
          style="--el-switch-on-color: #409eff; --el-switch-off-color: #909399"
          active-text="显示标题"
          inactive-text="隐藏标题"
        />
      </div>
    </div>
    <div class="title-config__item">
      <div class="title-config__item__title">文本标题</div>
      <div class="title-config__item__config">
        <el-input placeholder="请输入标题文本" v-model="titleText" />
      </div>
    </div>
    <div class="title-config__item">
      <div class="title-config__item__title">字体：</div>
      <div class="title-config__item__config">
        <el-select v-model="fontFamily" placeholder="请选择字体">
          <el-option
            v-for="item in fontFamilyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="title-config__item">
      <div class="title-config__item__title">文字大小</div>
      <div class="title-config__item__config">
        <el-input-number v-model="fontSize" :min="1" :max="100" style="width: 100%" />
      </div>
    </div>
    <div class="title-config__item">
      <div class="title-config__item__title">颜色</div>
      <div class="title-config__item__config">
        <el-color-picker v-model="color" />
      </div>
    </div>
    <div class="title-config__item">
      <div class="title-config__item__title">文字粗细</div>
      <div class="title-config__item__config">
        <el-select v-model="fontWeight" placeholder="请选择字体粗细">
          <el-option
            v-for="item in fontWeightOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="title-config__item">
      <div class="title-config__item__title">距顶部距离</div>
      <div class="title-config__item__config">
        <el-input-number v-model="top" style="width: 100%" />
      </div>
    </div>
    <div class="title-config__item">
      <div class="title-config__item__title">水平位置</div>
      <div class="title-config__item__config">
        <el-select v-model="horizontalPositon" placeholder="请选择字体粗细">
          <el-option
            v-for="item in horizontalOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
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
// const activeChartOption = reactive<ECOption>(formatter(canvasStore.activeChart?.option as string))
let { activeChartOption } = canvasStore
// 是否显示标题flag
const showTitle = ref<boolean | undefined>(false)
// 标题文本
const titleText = ref<string | undefined>('')
// 字体
const fontFamily = ref<string | undefined>('')
const fontFamilyOptions = commonSetting.fontFamilyOptions
// 字体大小
const fontSize = ref<number | undefined>()
// 颜色
const color = ref<string | undefined>('')
// 粗细
declare type ZRFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number
const fontWeight = ref<ZRFontWeight | undefined>('normal')
const fontWeightOptions = commonSetting.fontWeightOptions
// 距离顶部距离
const top = ref<number | undefined>(0)
// 距离左侧距离
const horizontalPositon = ref<string | undefined>('')
const horizontalOptions = commonSetting.horizontalOptions

// 初始化参数
if (activeChartOption && !Array.isArray(activeChartOption.title) && activeChartOption.title) {
  showTitle.value = activeChartOption.title.show
  titleText.value = activeChartOption.title.text
  fontFamily.value = activeChartOption.title.textStyle?.fontFamily
  fontSize.value = Number(activeChartOption.title.textStyle?.fontSize)
  color.value = activeChartOption.title.textStyle?.color
  fontWeight.value = activeChartOption.title.textStyle?.fontWeight
  top.value = Number(activeChartOption.title.top)
  horizontalPositon.value = activeChartOption.title.left + ''
}
// 改变图表title是否显示
watch(showTitle, (newValue: boolean | undefined) => {
  if (activeChartOption && !Array.isArray(activeChartOption.title) && activeChartOption.title) {
    activeChartOption.title.show = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(titleText, (newValue: string | undefined) => {
  if (activeChartOption && !Array.isArray(activeChartOption.title) && activeChartOption.title) {
    activeChartOption.title.text = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(fontFamily, (newValue: string | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.title) &&
    activeChartOption.title &&
    activeChartOption.title.textStyle
  ) {
    activeChartOption.title.textStyle.fontFamily = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(fontSize, (newValue: number | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.title) &&
    activeChartOption.title &&
    activeChartOption.title.textStyle
  ) {
    activeChartOption.title.textStyle.fontSize = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(color, (newValue: string | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.title) &&
    activeChartOption.title &&
    activeChartOption.title.textStyle
  ) {
    activeChartOption.title.textStyle.color = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(fontWeight, (newValue: ZRFontWeight | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.title) &&
    activeChartOption.title &&
    activeChartOption.title.textStyle
  ) {
    activeChartOption.title.textStyle.fontWeight = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(top, (newValue: number | undefined) => {
  if (activeChartOption && !Array.isArray(activeChartOption.title) && activeChartOption.title) {
    activeChartOption.title.top = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(horizontalPositon, (newValue: string | undefined) => {
  if (activeChartOption && !Array.isArray(activeChartOption.title) && activeChartOption.title) {
    activeChartOption.title.left = newValue
  } else {
    console.log('没有title配置')
  }
})

// watch(
//   () => canvasStore.activeChart?.option,
//   () => {
//     Object.assign(activeChartOption, canvasStore.activeChart?.option as string)
//   }
// )

if (activeChartOption) {
  watch(activeChartOption, () => {
    if (canvasStore.activeChart)
      canvasStore.activeChart.option =
        'let option = ' + stringify(activeChartOption, { space: '  ' })
  })
}
</script>

<style scoped>
.title-config {
  padding: 10px;
  .title-config__item {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    .title-config__item__title {
      line-height: 30px;
    }
    .title-config__item__config {
      width: 200px;
    }
  }
}
</style>
