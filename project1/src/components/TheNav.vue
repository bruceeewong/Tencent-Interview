<template>
  <nav class="nav">
    <a href="#" class="logo">
      <img src="../assets/logo.png" alt="tencent cloud logo">
    </a>
    <ul class="menu">
      <li
        class="menu-item"
        v-for="item in navList"
        :key="item.id"
      >
        <a :href="item.url">
          {{ item.title }}
        </a>
        <ul
          v-if="item.children"
          class="dropdown"
        >
          <dropdown-item
            v-for="item in item.children"
            :key="item.id"
            :dropdown-item="item"
          >
          </dropdown-item>
        </ul>
      </li>
    </ul>
    <div class="user">
      madison
      <i class="arrow-icon iconfont icon-sanjiao1"></i>
    </div>
  </nav>
</template>

<script>
import DropdownItem from './DropdownItem.vue'

export default {
  name: 'TheNav',
  data() {
    return {
      navList: [
        {
          id: '0',
          title: '首页',
          url: '#'
        },
        {
          id: '1',
          title: '立即接入',
          children: [
            {
              id: '1-1',
              title: '云存储平台',
              children: []
            },
            {
              id: '1-2',
              title: '云接入平台',
              children: [
                {
                  id: '1-2-1',
                  title: '流媒体平台',
                  children: []
                },
                {
                  id: '1-2-2',
                  title: '静态加速平台',
                  children: [
                    {
                      id: '1-2-2-1',
                      title: '我要接入',
                      url: '#'
                    },
                    {
                      id: '1-2-2-2',
                      title: '我的接入',
                      url: '#'
                    },
                    {
                      id: '1-2-2-3',
                      title: '我的审批',
                      url: '#'
                    },
                    {
                      id: '1-2-2-4',
                      title: '运营数据',
                      url: '#'
                    },
                    {
                      id: '1-2-2-5',
                      title: '所有接入',
                      url: '#'
                    }
                  ]
                }
              ]
            },
            {
              id: '1-3',
              title: '云网关',
              children: []
            },
            {
              id: '1-4',
              title: '虚拟化平台',
              children: []
            },
            {
              id: '1-5',
              title: '图片云平台',
              children: []
            },
            {
              id: '1-6',
              title: '通用列表',
              children: []
            },
            {
              id: '1-7',
              title: '后台管理',
              url: '#'
            }
          ]
        },
        {
          id: '2',
          title: '运营数据',
          url: '#'
        },
        {
          id: '3',
          title: '运营平台',
          url: '#'
        },
        {
          id: '4',
          title: '产品文档',
          url: '#'
        },
        {
          id: '5',
          title: '联系我们',
          url: '#'
        }
      ]
    }
  },
  components: {
    DropdownItem
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);

  > .logo {
    float: left;
    margin-left: 5%; 
  }

  > .logo > img {
    height: 40px;
    margin: 10px 0;
  }
}

.menu {
  float: left;
  margin-left: 10%;

  > .menu-item {
    position: relative;
    float: left;
    width: 80px;
    height: 40px;
    margin: 10px 10px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: $hover-bg-1;

      > .dropdown {
        display: block;
      }
    }

    > a {
      color: $sub-color;
      text-decoration: none;
    }

    > a:active {
      color: $primary-color-1;
    }
  }
}

.user {
  float: right;
  height: 40px;
  margin: 10px 10% 10px 0;
  line-height: 40px;
  color: $primary-color-1;
  cursor: pointer;
}

.arrow-icon {
  font-size: 12px;
  color: #000;
}

.dropdown {
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  border: $border-1;
  background-color: #fff;
}
</style>
