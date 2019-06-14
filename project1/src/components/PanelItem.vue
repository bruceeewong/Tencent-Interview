<template>
  <div class="panel-item clearfix">
    <div
      class="icon"
      :style="{'backgroundImage': `url(${detail.icon})`}"
    >
    </div>
    <div class="detail">
      <h3 class="title">
        {{ detail.title }}
      </h3>
      <p class="content">
        {{ detail.content }}
      </p>
      <button 
        :class="['btn', detail.isAccess ? 'btn-enabled' : 'btn-disabled']"
        :disabled="!detail.isAccess"
      >
        {{ detail.isAccess ? '申请接入' : '建设中...'}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelItem',
  props: {
    detail: {
      type: Object,
      default () {
        return {
          id: 0,
          title: '流媒体平台',
          content: '用户可以轻松地完成流媒体文件的音视频转码和存储。音视频转码，文件储存和访问加速是主要服务内容。',
          icon: require('../assets/icons/icon-media.png'),
          isAccess: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-item {
  width: 100%;
  height: 140px;
  margin: {
    bottom: 30px;
  }
  
  > .icon {
    float: left;
    width: 15%;
    height: inherit;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }

  > .detail {
    float: right;
    width: 80%;
  }

  > .detail > .title {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  > .detail > .content {
    width: 100%;
    margin-top: 20px;
    line-height: 1.5em;
    font-size: 14px;
    color: $sub-color;
  }
}

.btn {
  width: 100px;
  height: 30px;
  margin-top: 10px;
  line-height: 30px;
  text-align: center;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.btn-enabled {
  background-color: $primary-color-1;
  
}

.btn-disabled {
  background-color: #ccc;
  cursor: default;
}
</style>
