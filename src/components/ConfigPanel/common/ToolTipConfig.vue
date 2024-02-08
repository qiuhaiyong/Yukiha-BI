<template>
  <div class="tooltip-config-container">
    <div class="tooltip-config__item">
      <div class="tooltip-config__item__title">显示/隐藏</div>
      <div class="tooltip-config__item__config">
        <el-switch
          v-model="showToolTip"
          inline-prompt
          style="--el-switch-on-color: #409eff; --el-switch-off-color: #909399"
          active-text="显示提示框"
          inactive-text="隐藏提示框"
        />
      </div>
    </div>
    <div class="tooltip-config__item">
      <div class="tooltip-config__item__title">触发类型</div>
      <div class="tooltip-config__item__config">
        <el-select v-model="trigger" placeholder="请选择触发类型">
          <el-option
            v-for="item in triggerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>

    <div class="tooltip-config__item">
      <div class="tooltip-config__item__title">触发条件</div>
      <div class="tooltip-config__item__config">
        <el-select v-model="triggerOn" placeholder="请选择触发条件">
          <el-option
            v-for="item in triggerOnOpitons"
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
import { ref, watch } from 'vue'
import useCanvasStore from '@/stores/modules/canvas'
import stringify from 'json-stable-stringify'
import commonSetting from './commonSetting'
const canvasStore = useCanvasStore()
let { activeChartOption } = canvasStore
// 是否显示提示框
const showToolTip = ref<boolean | undefined>()

// 触发类型
const trigger = ref<'item' | 'axis' | 'none' | undefined>()
const triggerOptions = commonSetting.triggerOptions

// 触发条件
const triggerOn = ref<'mousemove' | 'click' | 'mousemove|click' | 'none' | undefined>()
const triggerOnOpitons = commonSetting.triggerOnOptions

if (activeChartOption && !Array.isArray(activeChartOption.tooltip) && activeChartOption.tooltip) {
  showToolTip.value = activeChartOption.tooltip.show
  trigger.value = activeChartOption.tooltip.trigger
  triggerOn.value = activeChartOption.tooltip.triggerOn
}

watch(showToolTip, (newValue: boolean | undefined) => {
  if (!Array.isArray(activeChartOption.tooltip) && activeChartOption.tooltip) {
    activeChartOption.tooltip.show = newValue
  }
})

watch(trigger, (newValue: 'item' | 'axis' | 'none' | undefined) => {
  if (!Array.isArray(activeChartOption.tooltip) && activeChartOption.tooltip) {
    activeChartOption.tooltip.trigger = newValue
  }
})

watch(triggerOn, (newValue: 'mousemove' | 'click' | 'mousemove|click' | 'none' | undefined) => {
  if (!Array.isArray(activeChartOption.tooltip) && activeChartOption.tooltip) {
    activeChartOption.tooltip.triggerOn = newValue
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
.tooltip-config-container {
  padding: 10px;
  .tooltip-config__item {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    .tooltip-config__item__title {
      line-height: 30px;
    }
    .tooltip-config__item__config {
      width: 200px;
    }
  }
}
</style>
