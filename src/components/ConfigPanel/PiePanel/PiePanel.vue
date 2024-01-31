<template>
  <div class="piepanel-container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="标题配置" name="1">
        <TitleConfig></TitleConfig>
      </el-collapse-item>
      <el-collapse-item title="图例" name="2">
        <LegendConfig></LegendConfig>
      </el-collapse-item>
      <el-collapse-item title="自定义颜色" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
      </el-collapse-item>
      <el-collapse-item title="提示框" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions
          for the users;
        </div>
      </el-collapse-item>
      <el-collapse-item title="数据系列" name="5">
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
}
</style>
