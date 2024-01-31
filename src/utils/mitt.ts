import mitt from 'mitt'
import type { Emitter } from 'mitt'
type Events = {
  saveChartOption?: undefined
  changeActiveChart?: undefined
  bar?: number
}

const emitter: Emitter<Events> = mitt<Events>()
export default emitter
