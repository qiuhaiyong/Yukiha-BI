<template>
  <div class="component-menu-container">
    <div class="component-menu__menu">
      <div class="component-menu__back">
        <el-icon style="vertical-align: sub" :size="20">
          <ArrowLeft></ArrowLeft>
        </el-icon>
        <span style="line-height: 60px">返回</span>
      </div>
      <div class="component-menu__list">
        <div v-for="item in chartOptionList" class="component-menu__item" @click="addChart(item)">
          <div class="item-icon">
            <el-icon style="vertical-align: sub" :size="16">
              <Fries />
            </el-icon>
          </div>
          <div class="item-title">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="component-menu__button">
      <div class="component-menu__preview button-item" @click="preview">
        <div class="button-icon">
          <el-icon style="vertical-align: sub" :size="16">
            <FullScreen />
          </el-icon>
        </div>
        <div class="button-text">预览</div>
      </div>
      <div class="component-menu__save button-item" @click="save">
        <div class="button-icon">
          <el-icon style="vertical-align: sub" :size="16">
            <DocumentChecked />
          </el-icon>
        </div>
        <div class="button-text">保存</div>
      </div>
      <div class="component-menu__publish button-item" @click="publish">
        <div class="button-icon">
          <el-icon style="vertical-align: sub" :size="16">
            <Promotion />
          </el-icon>
        </div>
        <div class="button-text">发布</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChartOption } from '@/components/Canvas/type'
import useCanvasStore from '@/stores/modules/canvas'
import chartOptionList from './chartoption'
import { nanoid } from 'nanoid'
import stringify from 'json-stable-stringify'
import emitter from '@/utils/mitt'
const canvasStore = useCanvasStore()
const addChart = (chartOption: ChartOption) => {
  const newChartOption: ChartOption = JSON.parse(JSON.stringify(chartOption))
  // 将配置转换成带换行的json字符串
  newChartOption.option = 'let option = ' + stringify(newChartOption.option, { space: '  ' })
  // 生成id
  let id: string = nanoid()
  newChartOption.id = id
  canvasStore.addChart(newChartOption)
}
// 预览回调方法
const preview = () => {}

// 保存回调方法
const save = () => {
  emitter.emit('saveChartOption')
}

const publish = () => {}
</script>

<style scoped>
.component-menu-container {
  --component-menu-height: 60px;
  --left-width: 160px;
  --right-width: 300px;
  --menu-item-width: 60px;
}
.component-menu-container {
  height: var(--component-menu-height);
  color: var(--yu-text-color-primary);
  line-height: var(--component-menu-height);
  text-align: center;
  border-bottom: var(--yu-border);
  display: flex;
  justify-content: space-between;
  /* 菜单 */
  .component-menu__menu {
    display: flex;
    /* 左边 */
    .component-menu__back {
      width: var(--left-width);
      cursor: pointer;
    }
    .component-menu__list {
      display: flex;
      .component-menu__item {
        line-height: 1;
        width: var(--menu-item-width);
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        justify-content: space-between;
        cursor: pointer;
      }
      .component-menu__item:hover {
        background: linear-gradient(to bottom, var(--yu-hover-bg-color), #ffffff);
        color: var(--yu-hover-text-color);
      }
    }
  }

  /* 右边 */
  .component-menu__button {
    display: flex;
    line-height: 1;
    & .button-item {
      width: var(--menu-item-width);
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }
  }
}
</style>
./chartoption
