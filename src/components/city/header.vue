<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="header-back">
        <div class="icon-wrap">
          <ion-icon name="chevron-back-outline" size="large"></ion-icon>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'

  .header
    position relative
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
