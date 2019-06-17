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
      <option-panel-1
        @seletchange="handleChange"
      ></option-panel-1>
    </div>
  </div>
</template>

<script>
import echartConf from '../configs/echartConf'

import InfoDisplay from '../components/InfoDisplay'
import LineDiagram from '../components/LineDiagram'
import OptionPanel1 from '../components/OptionPanel1'

export default {
  name: 'DayFlowTrend',
  data () {
    return {
      operatorList: [],
      option: echartConf.dayFlowOption,
      info: {
        caption: '信息展示',
        thead: [
          {
            id: 0,
            text: '运营商'
          },
          {
            id: 1,
            text: '日峰值'
          }
        ],
        tbody: []
      }
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
      
      // 格式化时间为'yyyymmdd'
      let dateFormated = _date.split('-').join('')
      this.operatorList = _operatorList

      // 获取数组中每个运营商的所有流量数据
      this.getFlowDataFromDataList()

      // 设置绘图参数后执行绘图
      let option = this.generateOption(_date, this.operatorList)
      this.setOption(option)
      this.updateInfo(dateFormated, this.operatorList)
    },
    
    // 生成绘图数据函数
    generateOption (_date='', _operatorList=[]) {
      let titleText = _date + '日流量图（1分钟粒度）'
      let legendData = []
      let serieList = []

      // 格式化时间为'yyyymmdd'
      let dateFormated = _date.split('-').join('')
      // 生成当日0点时间戳
      let zero_ms = Date.parse(_date) - 8 * 3600 * 1000

      // 遍历运营商数组, 一个代表一条曲线
      _operatorList.forEach(op => {

        // echart的标题所需数据
        legendData.push(op.operator + '-' + op.province)

        // echart series所需数据
        let serie = {
          name: op.operator + '-' + op.province,
          type: 'line',
          symbol: 'none',
          data: []
        }
          
        // 获取当日流量数据
        let dayFlowData = op.getDayFlow(dateFormated)
        // 生成[时间戳, 流量]格式
        serie.data = dayFlowData.map((flow, index) => {
          return [
            zero_ms + index * 60 * 1000,
            flow
          ]
        })

        serieList.push(serie)
      })

      // echarts绘图所需参数
      let option = this.option
      option.title.text = titleText
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
    updateInfo (_date, _operatorList) {
      let tbody = []

      _operatorList.forEach((op, index) => {
        let td = op.getMaxFlowInfo(_date)
        td.id = index
        tbody.push(td)
      })

      this.info.tbody = tbody
    },

    // 获取运营商的所有流量数据
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
    OptionPanel1
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
