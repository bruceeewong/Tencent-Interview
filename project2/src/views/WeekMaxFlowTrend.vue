<template>
  <div class="day-flow-trend">
    <div class="left">
      <info-display
        :info="info"
      ></info-display>
    </div>
    <div class="center">
      <line-diagram
        ref="lineDiagram"
        :option="option"
      ></line-diagram>
    </div>
    <div class="right">
      <option-panel-2
        @seletchange="handleChange"
      ></option-panel-2>
    </div>
  </div>
</template>

<script>
import utils from '../utils/util'
import echartConf from '../configs/echartConf'

import InfoDisplay from '../components/InfoDisplay'
import LineDiagram from '../components/LineDiagram'
import OptionPanel2 from '../components/OptionPanel2'

export default {
  name: 'WeekMaxFlowTrend',
  data () {
    return {
      operatorList: [],
      option: echartConf.weekFlowOption,
      info: {
        caption: '信息展示',
        thead: [
          {
            id: 0,
            text: '运营商'
          },
          {
            id: 1,
            text: '周峰值'
          }
        ],
        tbody: []
      },
      weekFlowData: []
    }
  },
  computed: {
    dataList () {
      return this.$store.state.dataList
    }
  },
  methods: {
    // 监听响应函数
    handleChange (_date='', _operatorList=[]) {
      let isEmpty = false
      if (!_date) {
        alert('日期不能为空')
        isEmpty = true
      }
      _operatorList.forEach(op => {
        if (!op.operator) {
          alert('运营商不能为空')
          isEmpty = true
        }
        if (!op.province) {
          alert('省份不能为空')
          isEmpty = true
        }
      })
      if (isEmpty) {
        return
      }

      let weekDates = []
      let dateStart = Date.parse(_date)
      let oneDay = 24 * 60 * 60 * 1000
      for (let i = 0 ; i < 7; i ++) {
        let date = new Date(dateStart + oneDay * i)
        weekDates.push(utils.dateFormat(date))
      }

      // 获取数组中每个运营商的所有流量数据
      this.operatorList = _operatorList
      this.getFlowDataFromDataList()

      // 设置绘图参数后执行绘图
      let option = this.generateOption(weekDates, this.operatorList)
      this.setOption(option)
      this.updateInfo(this.operatorList)
    },

    // 生成绘图数据函数
    generateOption  (_weekDates=[], _operatorList=[]) {
      let legendData = []
      let serieList = []

      let weekFlowData = []

      // 遍历运营商数组, 一个代表一条曲线
      _operatorList.forEach(op => {

        // echart的标题所需数据
        legendData.push(op.getFullName())

        // echart series所需数据
        let serie = {
          name: op.getFullName(),
          type: 'line',
          data: []
        }

        // 七天的日峰值
        let weekFlow = []
        for (let i = 0, len = _weekDates.length; i < len; i ++) {
          weekFlow.push(utils.randomFrom(30, 50))
        }

        weekFlowData.push(weekFlow)

        serie.data = weekFlow
        serieList.push(serie)
      })

      this.weekFlowData = weekFlowData

      // // echarts绘图所需参数
      let option = this.option
      option.xAxis.data = _weekDates
      option.legend.data = legendData
      option.series = serieList

      return option
    },

    // 绘图函数
    setOption (_option) {
      this.option = _option
      this.$refs.lineDiagram.draw()
    },

    // 更新数据展示函数
    updateInfo (_operatorList) {
      let tbody = []
      
      _operatorList.forEach((op, index) => {
        let td = {
          id: index,
          operator: op.operator,
          province: op.province,
          maxFlow: utils.getMax(this.weekFlowData[index])
        }
        tbody.push(td)
      })

      this.info.tbody = tbody
    },

    getFlowDataFromDataList() {
      let dataList = this.dataList

      // 为每个运营商加上其所有流量数据
      this.operatorList.forEach(obj => {
        let flowData = []
        // 查询模拟数据中该运营商的所有流量数据
        dataList.forEach(data => {
          if (data.operator === obj.operator
                && data.province === obj.province) {

            let fdata = {
              date: data.date,
              dayFlow: data.dayFlow
            }
            
            flowData.push(fdata)
          }
        })
        obj.flowData = flowData
      })
    }
  },
  components: {
    InfoDisplay,
    LineDiagram,
    OptionPanel2
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

.left, .right, .center {
  width: 14%;
  height: inherit;
  border: $border-1;
  border-radius: 4px;
}
.left {
  width: 14%;
}
.center {
  width: 65%;
}
.right {
  width: 19%;
}

</style>
