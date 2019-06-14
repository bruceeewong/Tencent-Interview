<template>
  <div class="banner">
    <img class="banner-photo" src="../assets/banner.png" alt="banner image">
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;

  > .banner-photo {
    width: 100%;
    object-fit: contain;
  }
}
</style>
