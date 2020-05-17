<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgcolor
    .search-input
      width 100%
      box-sizing border-box
      text-align center
      height .62rem
      line-height .62rem
      border-radius .06rem
      color #666
      padding 0 .1rem
</style>
