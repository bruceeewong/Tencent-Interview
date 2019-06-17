<template>
  <div class="day-flow-trend">
    <div class="left">
      <line-diagram
        ref="lineDiagram"
        :option="option"
      ></line-diagram>
    </div>
    <div class="right">
      <option-panel-3
        @seletchange="handleChange"
      ></option-panel-3>
    </div>
  </div>
</template>

<script>
import echartConf from '../configs/echartConf'

import LineDiagram from '../components/LineDiagram'
import OptionPanel3 from '../components/OptionPanel3'
import util from '../utils/util';

export default {
  name: 'DayMaxFlowDist',
  data () {
    return {
      operatorList: [],
      option: echartConf.prBaseOption
    }
  },
  computed: {
    dataList () {
      return this.$store.state.dataList
    }
  },
  methods: {
    // 监听响应函数
    handleChange (_date='', _operatorList=[], _dist) {
      let isEmpty = false
      if (!_date) {
        alert('日期不能为空')
        isEmpty = true
      }
      _operatorList.forEach(op => {
        if (!op.province) {
          alert('省份不能为空')
          isEmpty = true
        }
      })
      if (isEmpty) {
        return
      }

      this.operatorList = _operatorList
      
      // 格式化时间为'yyyymmdd'
      let dateFormated = _date.split('-').join('')

      // 生成该天的流量峰值数据(_dist变量决定选择按运营商展示/省份展示)
      let option = this.generateOption(dateFormated, _dist)

      this.setOption(option)
    },

    // 生成绘图数据函数
    generateOption (_date, _dist) {
      // echart绘图配置项
      let option = {}
      let titleText = _date + '日'
      let legendData = []
      let xAxisData = []
      let serieList = []

      // 按运营商展示
      if (_dist === 'operator') {
        option = echartConf.prBaseOption
        titleText += ' 日流量峰值（省份在各运营商的分布情况）'
        xAxisData = ['移动', '联通', '电信']

        this.operatorList.forEach(op => {
          legendData.push(op.province)

          let randomData = []
          for (let i = 0; i < 3; i ++) {
            randomData.push(util.randomFrom(30, 50))
          }

          let serie = {
            name: op.province,
            type: 'bar',
            barGap: 0,
            data: randomData
          }

          serieList.push(serie)
        })
      }

      // 按省份展示
      if (_dist === 'province') {
        option = echartConf.opBaseOption
        titleText += ' 日流量峰值（运营商在各省份的分布情况）'
        legendData = util.operators

        this.operatorList.forEach(op => {
          xAxisData.push(op.province)
        })

        util.operators.forEach(op => {
          let randomData = []
          for (let i = 0, len = this.operatorList.length; i < len; i ++) {
            randomData.push(util.randomFrom(30, 50))
          }
          let serie = {
            name: op,
            type: 'bar',
            barGap: 0,
            data: randomData
          }

          serieList.push(serie)
        })
      }

      option.title.text = titleText
      option.legend.data = legendData
      option.xAxis[0].data = xAxisData
      option.series = serieList
      return option
    },

    // 绘图函数
    setOption (option) {
      this.option = option
      this.$refs.lineDiagram.draw()
    }
  },
  components: {
    LineDiagram,
    OptionPanel3
  },
}
</script>

<style lang="scss" scoped>
.day-flow-trend {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 96%;
  height: 600px;
  margin: 0 auto;
  padding: 40px 0;
}

.left, .right {
  width: 14%;
  height: inherit;
  border: $border-1;
  border-radius: 4px;
}
.left {
  width: 80%;
}
.right {
  width: 19%;
}

</style>
