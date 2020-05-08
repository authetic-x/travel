<template>
  <div>
    <div class="weekend-title">周末一起玩</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1504/3a/3aa6bf2054f63b6a.water.jpg_256x160_a7c2bd96.jpg',
        title: '温泉水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/1504/3a/3aa6bf2054f63b6a.water.jpg_256x160_a7c2bd96.jpg',
        title: '温泉水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/1504/3a/3aa6bf2054f63b6a.water.jpg_256x160_a7c2bd96.jpg',
        title: '温泉水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .weekend-title
    line-height .8rem
    background #eee
    text-indent .2rem
    margin-top .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 45%
    .item-img
      width 100%
  .item-info
    padding: .1rem .2rem
    .item-title
      line-height .54rem
      font-size .32rem
    .item-desc
      color #ccc
</style>
