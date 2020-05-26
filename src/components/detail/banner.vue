<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/5f126ab1-3776-4ffb-b28a-dd1e513a1fbd.jpg_r_640x420x95_3ea4deaf.jpg">
      <div class="banner-info">
        <div class="banner-title">
          <span class="tit">产品编号</span>
          <span>3938914938</span>
        </div>
        <div class="banner-number">
          1/9<ion-icon class="icon" name="image-outline"></ion-icon>
        </div>
      </div>
    </div>
    <common-gallary v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/components/gallary/gallary.vue'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    position relative
    padding-bottom 55%
    .banner-img
      width 100%
      position absolute
      top 0
      left 0
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      display flex
      color #fff
      justify-content space-between
      padding 0 5px 10px
      background-image linear-gradient(transparent 0,rgba(0,0,0,0.8) 85%);
      .banner-number
        font-size .32rem
        display flex
        align-items center
        .icon
          font-size .32rem
</style>
