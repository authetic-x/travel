<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/banner.vue'
import DetailHeader from '@/components/detail/header.vue'
import DetailList from '@/components/detail/list.vue'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        childrenItem: [{
          title: '成人票'
        }, {
          title: '学生票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }],
      oldId: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSuc)
    },
    handleGetDataSuc (res) {
      if (res.data) {
        console.log(res.data)
      }
    }
  },
  mounted () {
    this.oldId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    if (this.oldId !== this.$route.params.id) {
      this.oldId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus">
  .content
    height 50rem
</style>
