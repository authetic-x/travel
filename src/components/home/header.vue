<template>
  <div class="header">
      <div class="header-left">
        <ion-icon class="icon-back" name="chevron-back-outline" size="large"></ion-icon>
      </div>
      <div class="header-input">
        <ion-icon name="search-outline"></ion-icon> 输入城市/景点/游玩主题
      </div>
      <router-link to="/city" class="link-wrap">
        <div class="header-right">
          {{city}}<ion-icon name="caret-down-outline"></ion-icon>
        </div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .header
    display flex
    line-height .86rem
    height 1rem
    background $bgcolor
    color #fff
  .header-left
    display flex
    align-items center
    width .64rem
    text-align center
  .header-input
    display flex
    align-items center
    flex: 1
    border-radius .1rem
    background-color #fff
    height .64rem
    line-height .64rem
    align-self center
    margin-left .2rem
    color: #ccc
    box-sizing border-box
    padding 5px
  ion-icon
    font-size 20px
  .link-wrap
    display flex
    justify-content center
  .header-right
    display flex
    min-width 1.04rem
    justify-content flex-end
    text-align center
    align-items center
    padding 0 .1rem
    color #fff
</style>
