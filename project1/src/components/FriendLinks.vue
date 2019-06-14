<template>
  <div class="friend-links clearfix">
    <p class="text">他们都在使用APD平台服务</p>
    <i class="arrow iconfont icon-sanjiao4"></i> 
    <div class="logo-list">
      <a
        href="#"
        class="logo"
        v-for="logo in logoList"
        :key="logo.id"
      >
        <img :src="logo.icon" :alt="logo.name + ' logo'">
      </a>
    </div>
    <i class="arrow iconfont icon-sanjiao3"></i>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      logoList: [
        {
          id: 0,
          name: 'tencent-game',
          icon: require('../assets/tencent-game.png'),
          url: '#'
        },
        {
          id: 1,
          name: 'tencent-mail',
          icon: require('../assets/tencent-mail.png'),
          url: '#'
        },
        {
          id: 2,
          name: 'pengyou',
          icon: require('../assets/pengyou.png'),
          url: '#'
        },
        {
          id: 3,
          name: 'tencent-pay',
          icon: require('../assets/tencent-pay.png'),
          url: '#'
        },
        {
          id: 4,
          name: 'tencent-video',
          icon: require('../assets/tencent-video.png'),
          url: '#'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.friend-links {
  width: 70%;
  margin: 0 auto;

  > .text {
    float: left;
    height: 30px;
    margin-right: 40px;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    color: $sub-color;
  }

  > .arrow {
    box-sizing: border-box;
    float: left;
    height: 30px;
    padding: 8px 0;
    font-size: 14px;
    color: $sub-color;
  }
}

.logo-list {
  float: left;
  height: 30px;

  > .logo {
    display: inline-block;
    margin-left: 40px;
  }

  > .logo > img {
    height: 30px;
  }

  > .logo:nth-last-child(1) {
    margin-right: 40px;
  }
}
</style>
