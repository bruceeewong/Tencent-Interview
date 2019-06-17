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
        <router-link class="link" :to="item.url">{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'TheNav',
  data() {
    return {
      navList: [
        {
          id: '0',
          title: '日值的周趋势图',
          url: '/'
        },
        {
          id: '1',
          title: '日流量图',
          url: '/day_flow'
        },
        {
          id: '2',
          title: '日峰值流量分布图',
          url: '/day_flow_dist'
        }
      ]
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.1);

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
    width: auto;
    height: 40px;
    margin: 10px 10px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: $hover-bg-1;
    }

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        color: $primary-color-2;
      }
    }
  }
}
</style>
