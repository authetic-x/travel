<template>
  <div>
    <router-link tag="div" to="/" class="abs" v-show="showAbs">
      <ion-icon class="back-btn" name="chevron-back-sharp"></ion-icon>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to='/'>
        <div class="header-back">
          <div class="icon-wrap">
            <ion-icon name="chevron-back-outline" size="large"></ion-icon>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (document.documentElement.scrollTop >= 60) {
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      if (top >= 60 && top <= 200) {
        const opacity = top / 200
        this.opacityStyle = { opacity }
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'

  .abs
    display flex
    align-items center
    justify-content center
    position absolute
    left .2rem
    top .2rem
    width .7rem
    height .7rem
    border-radius 50%
    background rgba(0, 0, 0, .4)
    .back-btn
      font-size .5rem
      color #fff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height .86rem
    line-height .86rem
    color #fff
    text-align center
    background $bgcolor
    font-size .32rem
    .header-back
      position absolute
      left 0
      top 0
      .icon-wrap
        display flex
        align-items center
        text-align center
        width .64rem
        height .86rem
        ion-icon
          color #fff
</style>
