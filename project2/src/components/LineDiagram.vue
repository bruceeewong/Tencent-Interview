<template>
  <div id="chart" class="chart">
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'LineDiagram',
  props: {
    option: {
      type: Object,
      default () {
        return {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            left: '93%',
            start: 1,
            end: 35
          }],
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        }
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  methods: {
    draw (_option) {
      this.chart.clear()
      if (_option) {
        this._option = _option
      }
      this.chart.setOption(this.option)
      this.chart.resize()
    }
  },
  mounted () {
    this.chart = echarts.init(document.getElementById('chart'))

    const that = this
    window.onresize = function () {
      that.draw()
    }
  },
  beforeDestroy () {
    this.chart.clear()
  },
  watch: {
    option (newVal) {
      this.draw(newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: inherit;
}
</style>

