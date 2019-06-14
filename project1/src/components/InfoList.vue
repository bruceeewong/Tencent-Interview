<template>
  <div class="info-list">
    <div class="menu">
      <div class="menu-item">
        最新业务接入情况
      </div>
    </div>
    <div class="content">
      <ul>
        <li
          class="info-item"
          v-for="item in infoList"
          :key="item.id"
        >
          <a href="#">
            <i class="primary iconfont icon-iconfonticon02"></i>
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      infoList: [
        {
          id: 0,
          title: '20190604[CSIG]基础服务',
          url: '#'
        },
        {
          id: 1,
          title: '20190531[PCG]浏览器',
          url: '#'
        },
        {
          id: 2,
          title: '20190531[PCG]商户平台',
          url: '#'
        },
        {
          id: 3,
          title: '20190530[CSIG]TCE文档系统',
          url: '#'
        },
        {
          id: 4,
          title: '20190604[SNG]群相册照片',
          url: '#'
        },
        {
          id: 5,
          title: '20190531[SNG]群相册标签',
          url: '#'
        },
        {
          id: 6,
          title: '20190531[SNG]群相册地点',
          url: '#'
        },
        {
          id: 7,
          title: '20190530[SNG]群相册人脸',
          url: '#'
        },
        {
          id: 8,
          title: '20190530[SNG]群相册聚类',
          url: '#'
        },
        {
          id: 9,
          title: '20190530[IEG]家的故事',
          url: '#'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.info-list {
  width: 100%;

  > .menu {
    border-bottom: $border-1;
  }
  > .menu > .menu-item {
    box-sizing: border-box;
    width: 160px;
    height: 40px;
    border: {
      top: $border-2;
      left: $border-1;
      right: $border-1;
    };
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    color: $primary-color-2;
  }
}

.info-item {
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  @include text-ellipsis;

  > a {
    color: $sub-color;
    text-decoration: none;
  }

  > a:hover {
    color: $primary-color-1;
  }
}

.primary {
  color: $primary-color-1;
}
</style>
