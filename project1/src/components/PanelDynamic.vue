<template>
  <div class="dynamic-panel">
    <ul class="menu">
      <li
        class="menu-item"
        v-for="item in tabList"
        :key="item.id"
        :class="{ active: currentTabId === item.id }"
        @click="switchTab(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="content">
      <transition name="component-fade" mode="out-in">
        <component :is="currentTabComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import CloudSavePlatform from './CloudSavePlatform.vue'
import CloudAccessPlatform from './CloudAccessPlatform.vue'
import CloudGate from './CloudGate.vue'
import VirtualPlatform from './VirtualPlatform.vue'
import CloudPhotoPlatform from './CloudPhotoPlatform.vue'
import GeneralList from './GeneralList.vue'

export default {
  name: '',
  data() {
    return {
      tabList: [
        {
          id: 0,
          name: "云存储平台",
          content: CloudSavePlatform
        },
        {
          id: 1,
          name: "云接入平台",
          content: CloudAccessPlatform
        },
        {
          id: 2,
          name: "云网关",
          content: CloudGate
        },
        {
          id: 3,
          name: "虚拟化平台",
          content: VirtualPlatform
        },
        {
          id: 4,
          name: "图片云平台",
          content: CloudPhotoPlatform
        },
        {
          id: 5,
          name: "通用列表",
          content: GeneralList
        },
      ],
      currentTabId: 0
    }
  },
  computed: {
    currentTabComponent() {
      return this.tabList[this.currentTabId].content
    }
  },
  methods: {
    switchTab(id) {
      this.currentTabId = id
    }
  },
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 40px;
  border-bottom: $border-1;

  > .menu-item {
    box-sizing: border-box;
    float: left;
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    color: $primary-color-2;
    cursor: pointer;
  }

  > .menu-item:hover {
    background-color: #eee;
  }
}

.active {
  border: {
    top: $border-2;
    left: $border-1;
    right: $border-1;
  }
}
</style>
