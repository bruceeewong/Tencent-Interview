// echarts绘图Option

// 日流量图的Option
let dayFlowOption = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: []
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: true
    }
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      left: '10%',
      start: 0,
      end: 100
    }
  ],
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: true
    }
  },
  series: []
};

// 周流量图的Option
let weekFlowOption =  {
  title: {
    text: '日值的周趋势图（从起始日往后7天）'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: []
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    // {
    //   name: '',
    //   type: 'line',
    //   data: []
    // }
  ]
};

// 按省份显示的流量图Option
let prBaseOption = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: []
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisTick: {show: false},
      data: []
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    // {
    //   name: 'Forest',
    //   type: 'bar',
    //   barGap: 0,
    //   data: [320, 332, 301, 334, 390]
    // }
  ]
};

// 按运营商显示的流量图Option
let opBaseOption = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: []
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisTick: {show: false},
      data: []
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    // {
    //   name: 'Forest',
    //   type: 'bar',
    //   barGap: 0,
    //   data: [320, 332, 301, 334, 390]
    // }
  ]
};

export default {
  dayFlowOption,
  weekFlowOption,
  prBaseOption,
  opBaseOption
}