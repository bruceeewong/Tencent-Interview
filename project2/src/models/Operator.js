// Operator class
export default class Operator {
  constructor(_id, _operator, _province, _flowData) {
    this.id = _id;
    this.operator = _operator || '';
    this.province = _province || '';
    this.flowData = _flowData || [];
  }

  // 获取完整名称
  getFullName() {
    return this.operator + '-' + this.province;
  }

  // 获取某天的所有流量数据
  getDayFlow(_date='') {
    let dayFlowData = this.flowData.filter(item => {
      return item.date === _date
    })[0]

    return dayFlowData.dayFlow
  }

  // 获取最大日流量
  getMaxFlowInfo(_date = '') {
    let maxFlow = 0

    this.flowData.forEach(item => {

      // 找到该日期的流量数据
      if (item.date === _date) {

        // 排序
        let flowSort = item.dayFlow.concat();
        if (Array.isArray(flowSort)) {
          // 取排好序的数组第一个即最大流量
          maxFlow = flowSort.sort(function (val1, val2) { return val2 - val1; })[0];
        } else {
          throw 'flowSort is not an Array';
        }
      }
    });

    // 返回日流量峰值的信息
    return {
      operator: this.operator,
      province: this.province,
      date: _date,
      maxFlow: maxFlow
    };
  }

  // 
  getDiagramOption () {

  }
}