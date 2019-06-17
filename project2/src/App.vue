<template>
  <div id="app">
    <header class="header">
      <the-nav></the-nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import utils from './utils/util'
import TheNav from './components/TheNav.vue'

export default {
  name: 'App',
  components: {
    TheNav
  },
  beforeMount () {
    let dataList = utils.generateData()
    this.$store.commit('setDataList', dataList)
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Microsoft YaHei';
  width: 100%;
  min-width: 1280px;
}
.header {
  width: 100%;
}
</style>
