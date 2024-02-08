<template>
  <div class="piepanel-container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template #title>
          <div class="config-title">标题配置</div>
        </template>
        <TitleConfig></TitleConfig>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title>
          <div class="config-title">图例</div>
        </template>
        <LegendConfig></LegendConfig>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title>
          <div class="config-title">自定义颜色</div>
        </template>
        <ColorConfig></ColorConfig>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template #title>
          <div class="config-title">提示框</div>
        </template>
        <ToolTipConfig></ToolTipConfig>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template #title>
          <div class="config-title">数据系列</div>
        </template>
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions
          for the users;
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref<string[]>([])
const handleChange = () => {}
</script>

<style scoped>
.piepanel-container {
  --piepanel-height: calc(100vh - 287.54px);
}
.piepanel-container {
  height: var(--piepanel-height);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .config-title {
    font-size: var(--yu-font-size-medium);
    color: var(--yu-text-color-regular);
    padding-left: 15px;
  }
}
</style>
