import type { ChartOption } from '@/components/Canvas/type'
import type { ECOption } from '@/components/Canvas/type'

export interface CanvasState {
  chartList: ChartOption[]
  activeChart: ChartOption | null
  activeChartOption: ECOption
}
