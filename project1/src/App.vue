<template>
  <div id="app">
    <header class="header">
      <the-nav />
    </header>
    <main class="main">
      <the-banner />
      <div class="body clearfix">
        <section class="body-left">
          <panel-dynamic></panel-dynamic>
        </section>
        <aside class="body-right">
          <info-list></info-list>
        </aside>
      </div>
    </main>
    <footer class="footer">
      <friend-links />
    </footer>
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheBanner from './components/TheBanner.vue'
import PanelDynamic from './components/PanelDynamic.vue'
import InfoList from './components/InfoList.vue'
import FriendLinks from './components/FriendLinks.vue'

export default {
  name: 'app',
  components: {
    TheNav,
    TheBanner,
    PanelDynamic,
    InfoList,
    FriendLinks
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  min-width: 1280px;
  margin: 0 auto;
  background-color: #fff;
}

.header, .main, .footer {
  width: 100%;
}

.main {
  > .body {
    width: 70%;
    margin: 20px auto 0;
  }

  > .body > .body-left {
    float: left;
    width: 76%;
  }

  > .body > .body-right {
    float: right;
    width: 22%;
  }
}

.footer {
  padding: 40px 0;
}
</style>
