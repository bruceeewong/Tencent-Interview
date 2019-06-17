// data
let operators = ['移动', '联通', '电信'];
let provinces = ['广东', '湖南', '湖北', '上海', '北京', '四川'];
let dates = [];
let i, start = 20190610, end = 20190616;

for (i = start; i <= end; i ++) {
  dates[i] = i.toString();
}

// 范围取随机整数函数
function randomFrom(lowerValue = 0, upperValue = 0) {
  let choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}

// 生成数据函数
function generateData() {
  let dataList = [];

  // 日期
  dates.forEach(date => {
    // 运营商
    operators.forEach(operator => {
      // 省份
      provinces.forEach(province => {
        let data = {
          date: '',
          operator: '',
          province: '',
          dayFlow: []
        };
  
        data.date = date;
        data.operator = operator;
        data.province = province;

        let dayFlow = [];
        // 构造1440个流量数据
        for (let j = 0; j < 1440; j ++) {
          let flow = 0;

          if (j >=0 && j <= 360) {
            flow = randomFrom(0, 5);  // 模拟0-6点

          } else if (j > 360 && j <= 540) {
            flow = randomFrom(0, 20);  // 模拟6-9点

          } else if (j > 540 && j <= 1080) {
            flow = randomFrom(0, 50);  // 模拟9-18点

          } else if (j > 1080 && j <= 1380) {
            flow = randomFrom(0, 20);  // 模拟18-23点

          } else {
            flow = randomFrom(0, 5);    // 模拟23-24点
          }

          dayFlow.push(flow);
        }

        data.dayFlow = dayFlow;
        // 生成一条数据
        dataList.push(data);
      });
    });
  });

  return dataList;
}

// 日期格式化
function dateFormat(date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (parseInt(month) < 10) {
    month = '0' + month
  }
  if (parseInt(day) < 10) {
    day = '0' + day
  }

  return year + '' + month + '' + day
}

// 取数组最大值函数
function getMax(array) {
  return array.sort(function(val1, val2) { return val2 - val1; })[0]
}

export default {
  operators,
  provinces,
  dates,
  generateData,
  dateFormat,
  getMax,
  randomFrom
}
