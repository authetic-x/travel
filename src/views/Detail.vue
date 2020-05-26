<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/banner.vue'
import DetailHeader from '@/components/detail/header.vue'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus">
  .content
    height 50rem
</style>
