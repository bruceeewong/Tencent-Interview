<template>
  <div class="info-display">
    <table class="table">
      <caption class="caption">{{ info.caption }}</caption>
      <thead class="thead">
        <tr class="tr">
          <th
            class="th"
            v-for="th in info.thead"
            :key="th.id"
          >
            {{ th.text }}
          </th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr
          class="tr"
          v-for="td in info.tbody"
          :key="td.id"
        >
          <td class="td">{{ td.operator + '-' + td.province }}</td>
          <td class="td">{{ td.maxFlow }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InfoDisplay',
  props: {
    info: {
      type: Object,
      default () {
        return {
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
          tbody: [
            {
              id: 0,
              operator: '移动-广东',
              maxFlow: 40
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-display {
  width: 100%;

}
.table {
  width: 90%;
  margin: 20px auto;
  font-size: 14px;
  border: $border-1;

  > .caption {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
  }

  > .thead {
    background-color: #666;
    color: #fff;
  }

  .tr {
    height: 30px;
    border-bottom: $border-1;
  }

  .th {
    padding-left: 10px;
    vertical-align: middle;
    letter-spacing: 0.1em;
    text-align: left;
  }

  .td {
    padding-left: 10px;
    vertical-align: middle;
    letter-spacing: 0.1em;
    text-align: left;
  }
  
}
</style>

