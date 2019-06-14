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
          title: '流媒体平台',
          content: '用户可以轻松地完成流媒体文件的音视频转码和存储。音视频转码，文件储存和访问加速是主要服务内容。',
          icon: require('../assets/icons/icon-media.png'),
          isAccess: true
        },
        {
          id: 1,
          title: '静态加速平台',
          content: '用户可以便捷地使用文件存储服务，轻松地上传下载文件。文件存储、CDN加速是目前的主要服务内容。',
          icon: require('../assets/icons/icon-cloud.png'),
          isAccess: true
        },
        {
          id: 2,
          title: '动态加速平台',
          content: '用户可以享受智能路由，多路回源等服务。典型应用场景包括微信图片加速，微信消息加速，游戏加速等。',
          icon: require('../assets/icons/icon-dynamic.png'),
          isAccess: false
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
