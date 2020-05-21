<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text" placeholder="输入城市名或拼音"
        @focus="focused=true"
        @blur="focused=false"
      >
    </div>
    <div class="search-content" ref="search" v-show="keyword || focused">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from '@better-scroll/core'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      focused: false
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      // this.keyword = ''
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyword) !== -1 ||
                item.name.indexOf(this.keyword) !== -1) {
                result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
    .search-item:hover
      background #eee
</style>
