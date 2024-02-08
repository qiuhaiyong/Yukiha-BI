import type { ECBasicOption } from 'echarts/types/dist/shared'
import type { ComposeOption } from 'echarts/core'
import type {
  // 组件类型的定义后缀都为 ComponentOption

  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
  // 数据集组件
  DatasetComponentOption,
  GeoComponentOption,
  AriaComponentOption,
  BrushComponentOption,
  PolarComponentOption,
  RadarComponentOption,
  GraphicComponentOption,
  ToolboxComponentOption,
  CalendarComponentOption,
  DataZoomComponentOption,
  MarkAreaComponentOption,
  MarkLineComponentOption,
  ParallelComponentOption,
  TimelineComponentOption,
  MarkPointComponentOption,
  VisualMapComponentOption,
  SingleAxisComponentOption,
  AxisPointerComponentOption
} from 'echarts/components'

import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  MapSeriesOption,
  TreeSeriesOption,
  GaugeSeriesOption,
  GraphSeriesOption,
  LinesSeriesOption,
  RadarSeriesOption,
  CustomSeriesOption,
  FunnelSeriesOption,
  SankeySeriesOption,
  BoxplotSeriesOption,
  HeatmapSeriesOption,
  ScatterSeriesOption,
  TreemapSeriesOption,
  ParallelSeriesOption,
  SunburstSeriesOption,
  ThemeRiverSeriesOption,
  CandlestickSeriesOption,
  PictorialBarSeriesOption,
  EffectScatterSeriesOption
} from 'echarts/charts'

export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | MapSeriesOption
  | TreeSeriesOption
  | GaugeSeriesOption
  | GraphSeriesOption
  | LinesSeriesOption
  | RadarSeriesOption
  | CustomSeriesOption
  | FunnelSeriesOption
  | SankeySeriesOption
  | BoxplotSeriesOption
  | HeatmapSeriesOption
  | ScatterSeriesOption
  | TreemapSeriesOption
  | ParallelSeriesOption
  | SunburstSeriesOption
  | ThemeRiverSeriesOption
  | CandlestickSeriesOption
  | PictorialBarSeriesOption
  | EffectScatterSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | GeoComponentOption
  | AriaComponentOption
  | BrushComponentOption
  | PolarComponentOption
  | RadarComponentOption
  | GraphicComponentOption
  | ToolboxComponentOption
  | CalendarComponentOption
  | DataZoomComponentOption
  | MarkAreaComponentOption
  | MarkLineComponentOption
  | TimelineComponentOption
  | MarkPointComponentOption
  | VisualMapComponentOption
  | SingleAxisComponentOption
  | AxisPointerComponentOption
>

export interface ChartOption {
  id?: string
  chartId?: number
  x: number
  y: number
  z: number
  w: number
  h: number
  name?: string
  option: ECOption | string
}
