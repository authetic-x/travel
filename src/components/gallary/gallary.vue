<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img class="swiper-image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/5f126ab1-3776-4ffb-b28a-dd1e513a1fbd.jpg_r_640x420x95_3ea4deaf.jpg">
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-image" src="https://img1.qunarzz.com/vs_ceph_vs_tts/5f126ab1-3776-4ffb-b28a-dd1e513a1fbd.jpg_r_640x420x95_3ea4deaf.jpg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        loop: true,
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    justify-content center
    flex-direction column
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 99
    background black
    transition all .5s ease
    .wrapper
      height 0
      padding-bottom 66.6%
      background #fff
      .swiper-image
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
