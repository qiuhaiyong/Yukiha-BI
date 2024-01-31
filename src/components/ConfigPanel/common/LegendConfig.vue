<template>
  <div class="legend-config">
    <div class="legend-config__item">
      <div class="legend-config__item__title">显示/隐藏</div>
      <div class="legend-config__item__config">
        <el-switch
          v-model="showLegend"
          inline-prompt
          style="--el-switch-on-color: #409eff; --el-switch-off-color: #909399"
          active-text="显示图例"
          inactive-text="隐藏图例"
        />
      </div>
    </div>
    <div class="legend-config__item">
      <div class="legend-config__item__title">图例字体</div>
      <div class="legend-config__item__config">
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
    <div class="legend-config__item">
      <div class="legend-config__item__title">字体大小</div>
      <div class="legend-config__item__config">
        <el-input-number v-model="fontSize" :min="1" :max="100" style="width: 100%" />
      </div>
    </div>
    <div class="legend-config__item">
      <div class="legend-config__item__title">字体颜色</div>
      <div class="legend-config__item__config">
        <el-color-picker v-model="color" />
      </div>
    </div>
    <div class="legend-config__item">
      <div class="legend-config__item__title">字体粗细</div>
      <div class="legend-config__item__config">
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
    <div class="legend-config__item">
      <div class="legend-config__item__title">水平位置</div>
      <div class="legend-config__item__config">
        <el-select v-model="horizontalPosition" placeholder="请选择水平位置">
          <el-option
            v-for="item in horizontalOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="legend-config__item">
      <div class="legend-config__item__title">垂直位置</div>
      <div class="legend-config__item__config">
        <el-select v-model="verticalPosition" placeholder="请选择垂直位置">
          <el-option
            v-for="item in verticalOptions"
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
// let activeChartOption = reactive<ECOption>(formatter(canvasStore.activeChart?.option as string))
let { activeChartOption } = canvasStore
// 是否显示
const showLegend = ref<boolean | undefined>(false)

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

// 图例水平位置
const horizontalPosition = ref<string | undefined>('')
const horizontalOptions = commonSetting.horizontalOptions

// 图例垂直位置
const verticalPosition = ref<string | undefined>('')
const verticalOptions = commonSetting.verticalOptions

// 布局朝向
const orient = ref<string | undefined>('')
const orientOptions = commonSetting.orientOptions

if (activeChartOption && !Array.isArray(activeChartOption.legend) && activeChartOption.legend) {
  showLegend.value = activeChartOption.legend.show
  fontFamily.value = activeChartOption.legend.textStyle?.fontFamily
  fontSize.value = Number(activeChartOption.legend.textStyle?.fontSize)
  color.value = activeChartOption.legend.textStyle?.color
  fontWeight.value = activeChartOption.legend.textStyle?.fontWeight
  horizontalPosition.value = activeChartOption.legend.left + ''
  verticalPosition.value = activeChartOption.legend.top + ''
}

watch(showLegend, (newValue: boolean | undefined) => {
  if (activeChartOption && !Array.isArray(activeChartOption.legend) && activeChartOption.legend) {
    activeChartOption.legend.show = newValue
  } else {
    console.log('配置图例出错！')
  }
})

watch(fontFamily, (newValue: string | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.legend) &&
    activeChartOption.legend &&
    activeChartOption.legend.textStyle
  ) {
    activeChartOption.legend.textStyle.fontFamily = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(fontSize, (newValue: number | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.legend) &&
    activeChartOption.legend &&
    activeChartOption.legend.textStyle
  ) {
    activeChartOption.legend.textStyle.fontSize = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(color, (newValue: string | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.legend) &&
    activeChartOption.legend &&
    activeChartOption.legend.textStyle
  ) {
    activeChartOption.legend.textStyle.color = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(fontWeight, (newValue: ZRFontWeight | undefined) => {
  if (
    activeChartOption &&
    !Array.isArray(activeChartOption.legend) &&
    activeChartOption.legend &&
    activeChartOption.legend.textStyle
  ) {
    activeChartOption.legend.textStyle.fontWeight = newValue
  } else {
    console.log('没有title配置')
  }
})

watch(horizontalPosition, (newValue: string | undefined) => {
  if (activeChartOption && !Array.isArray(activeChartOption.legend) && activeChartOption.legend) {
    activeChartOption.legend.left = newValue
  } else {
    console.log('配置图例出错！')
  }
})

watch(verticalPosition, (newValue: string | undefined) => {
  if (activeChartOption && !Array.isArray(activeChartOption.legend) && activeChartOption.legend) {
    activeChartOption.legend.top = newValue
  } else {
    console.log('配置图例出错！')
  }
})

if (activeChartOption) {
  watch(activeChartOption, () => {
    if (canvasStore.activeChart)
      canvasStore.activeChart.option =
        'let option = ' + stringify(activeChartOption, { space: '  ' })
  })
}
</script>

<style scoped>
.legend-config {
  padding: 10px;
  .legend-config__item {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    .legend-config__item__title {
      line-height: 30px;
    }
    .legend-config__item__config {
      width: 200px;
    }
  }
}
</style>
