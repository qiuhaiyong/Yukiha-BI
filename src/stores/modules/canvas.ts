import { defineStore } from 'pinia'
import type { CanvasState } from './type'
import type { ChartOption } from '@/components/Canvas/type'
import { formatter } from '@/utils/chartConfigMethod'

const useCanvasStore = defineStore('CanvasStore', {
  state: (): CanvasState => {
    return {
      chartList: [],
      activeChart: null,
      activeChartOption: {}
    }
  },
  actions: {
    addChart(chartOption: ChartOption) {
      this.chartList.push(chartOption)
    },
    setActiveChart(chartOption: ChartOption) {
      this.activeChart = chartOption
      this.activeChartOption = formatter(this.activeChart?.option as string)
    },
    removeActiveChart() {
      this.activeChart = null
      this.activeChartOption = {}
    }
  },
  getters: {}
})

export default useCanvasStore
