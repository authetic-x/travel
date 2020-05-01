<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <p>test</p>
  </div>
</template>

<script>

import HomeHeader from '@/components/home/header'
import HomeSwiper from '@/components/home/swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
