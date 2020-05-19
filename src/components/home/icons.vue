<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="img in page" :key="img.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="img.imgUrl">
          </div>
          <p class="icon-desc">{{img.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOptions: {
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
    background #fff
  .icon
    overflow hidden
    float left
    height 0
    width 25%
    padding-bottom 25%
    position relative
    .icon-img
      overflow hidden
      display flex
      justify-content center
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        height 100%
    .icon-desc
      position absolute
      bottom 0
      left 0
      right 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
