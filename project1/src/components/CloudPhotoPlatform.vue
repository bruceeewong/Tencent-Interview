<template>
  <div class="cloud-access clearfix">
    <panel-item
      class="cell"
      v-for="item in itemList"
      :key="item.id"
      :detail="item"
    ></panel-item>
  </div>
</template>

<script>
import PanelItem from './PanelItem.vue'

export default {
  name: '',
  data() {
    return {
      itemList: [
        {
          id: 0,
          title: '图片云平台',
          content: '用户可以轻松地完成流媒体文件的音视频转码和存储。音视频转码，文件储存和访问加速是主要服务内容。',
          icon: require('../assets/icons/icon-media.png'),
          isAccess: true
        }
      ]
    }
  },
  components: {
    PanelItem
  }
}
</script>

<style lang="scss" scoped>
.cloud-access {
  width: 100%;
  margin-top: 30px;

  > .cell {
    float: left;
    width: 45%;
    margin-right: 5%;
  }
}
</style>
