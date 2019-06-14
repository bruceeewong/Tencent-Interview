<template>
  <li :class="['dropdown-item', hasChild ? '' : 'item-narrow']">
    <span>
      {{ dropdownItem.title }}
    </span>
    <i 
      v-if="hasChild"
      class="arrow iconfont icon-sanjiao3"
    ></i>
    <ul class="dropdown-right"
      v-if="hasChild"
    >
      <dropdown-item
        v-for="item in dropdownItem.children"
        :key="item.id"
        :dropdown-item="item"
      ></dropdown-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    dropdownItem: {
      type: Object
    }
  },
  computed: {
    hasChild () {
      return Array.isArray(this.dropdownItem.children)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-narrow {
  width: 70px !important;
}

.dropdown-item {
  position: relative;
  width: 106px;
  padding: 10px 0 10px 14px;
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  color: $sub-color;

  > .arrow {
    float: right;
    margin-right: 6px;
    font-size: 6px;
  }

  > a {
    color: $sub-color;
    text-decoration: none;

    &:hover {
      color: $primary-color-1;
    }
  }

  &:hover {
    color: $primary-color-1;

    > .dropdown-right {
      display: block;
    }
  }
}

.dropdown-right {
  display: none;
  position: absolute;
  top: 0;
  left: 120px;
  border: $border-1;
  background-color: #fff;
}
</style>
