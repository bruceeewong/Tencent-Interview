<template>
  <div class="option-panel">
    <div class="option">
      <h3 class="caption">日期选择</h3>
      <div class="form-group">
        <label class="form-label">日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
        />
      </div>
    </div>
    <div class="option">
      <h3 class="caption">流量分布情况</h3>
      <div class="form-group">
        <input
          type="radio"
          name="dist"
          value="operator"
          v-model="dist"
        />
        <label class="form-label">按运营商</label>
      </div>
      <div class="form-group">
        <input
          type="radio"
          name="dist"
          value="province"
          v-model="dist"
        />
        <label class="form-label">按省份</label>
      </div>
      <div
        class="form-group"
        v-for="item in operatorList"
        :key="item.id"
      >
        <label class="form-label">省份</label>
        <select
          class="form-control"
          v-model="item.province"
        >
          <template
            v-for="pr in provinces"
          >
            <option
              :key="pr"
              :value="pr"
            >
              {{ pr }}
            </option>
          </template>
        </select>
        <button
          v-show="hasMoreOperator"
          class="btn-del"
          @click="delProvince(item.id)"
        >
          <i class="iconfont icon-jianhao"></i>
        </button>
      </div>
      <button
        class="btn-add"
        @click="addProvince"
      >
        <i class="iconfont icon-jiahao1"></i>
      </button>
      <button
        class="btn-draw"
        @click="seletchange"
      >
        生成图表
      </button>
    </div>
  </div>
</template>

<script>
import utils from '../utils/util'
import Operator from '../models/Operator'

export default {
  name: 'OptionPanel',
  data () {
    return {
      operators: utils.operators,
      provinces: utils.provinces,
      date: '2019-06-10',
      dist: 'operator',
      operatorList: [],
      id: 0
    }
  },
  computed: {
    hasMoreOperator () {
      return this.operatorList.length > 1
    }
  },
  methods: {
    addProvince () {
      this.id ++

      let operatorObj = new Operator(this.id, this.operators[0], this.provinces[0])
      this.operatorList.push(operatorObj)
    },
    delProvince (id) {
      let delIndex = 0
      this.operatorList.forEach((item, index) => {
        if (item.id === id) {
          delIndex = index
        }
      })
      this.operatorList.splice(delIndex, 1)
    },
    seletchange () {
      this.$emit('seletchange', this.date, this.operatorList, this.dist)
    }
  },
  mounted () {
    this.addProvince()
    this.seletchange()
  }
}
</script>

<style lang="scss" scoped>
.option-panel {
  width: 100%;
}
.option {
  width: 90%;
  margin: 20px 7% 0 3%;

  > .caption {
    text-align: left;
    font-weight: bold;
    font-size: 18px;
  }
}

.form-group {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px auto;

  > .form-label {
    text-align: left;
  }

  > .form-control {
    margin: {
      left: 10px;
      right: 10px;
    }
    padding: 2px;
  }
}

.date-group {
  justify-content: flex-start;
}

.btn-add, .btn-draw {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background: $primary-color-2;
  border: none;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 2px 6px 2px rgba(0,0,0,0.1);
}

.btn-draw {
  background: $primary-color-1;
}

.btn-del {
  margin-left: 5px;
  background: none;
  border: none;
  color: red;
}
</style>

