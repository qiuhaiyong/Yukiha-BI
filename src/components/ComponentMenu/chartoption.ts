import type { ChartOption } from '@/components/Canvas/type'
const chartOptionList: ChartOption[] = [
  {
    chartId: 1,
    name: '饼图',
    x: 400,
    y: 400,
    z: 1,
    w: 300,
    h: 300,
    option: {
      color: [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc'
      ],
      title: {
        show: false,
        text: '饼图',
        top: 0,
        left: 'center',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: '#ffffff',
          fontWeight: 'bolder'
        }
      },
      tooltip: {
        show: false,
        trigger: 'item',
        triggerOn: 'mousemove|click'
      },
      legend: {
        show: false,
        left: 'center',
        top: 'top',
        orient: 'horizontal',
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 12,
          color: '#ffffff',
          fontWeight: 'normal'
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  },
  {
    chartId: 2,
    name: '折线图',
    x: 400,
    y: 400,
    z: 1,
    w: 300,
    h: 300,
    option: {
      color: [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc'
      ],
      title: {
        show: false,
        text: '折线图',
        left: 'center',
        top: 0,
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: '#ffffff',
          fontWeight: 'bolder'
        }
      },
      tooltip: {
        show: false,
        trigger: 'axis',
        triggerOn: 'mousemove|click'
      },
      legend: {
        show: false,
        left: 'center',
        top: 'top',
        orient: 'horizontal',
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 12,
          color: '#ffffff',
          fontWeight: 'normal'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
  },
  {
    chartId: 3,
    name: '柱状图',
    x: 400,
    y: 400,
    z: 1,
    w: 300,
    h: 300,
    option: {
      color: [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc'
      ],
      title: {
        show: false,
        text: '柱状图',
        top: 0,
        left: 'center',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: '#ffffff',
          fontWeight: 'bolder'
        }
      },
      tooltip: {
        show: false,
        trigger: 'axis',
        triggerOn: 'mousemove|click'
      },
      legend: {
        show: false,
        left: 'center',
        top: 'top',
        orient: 'horizontal',
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 12,
          color: '#ffffff',
          fontWeight: 'normal'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
  }
]
export default chartOptionList
