<template>
  <div class="info">
    <div class="wrapper border-bottom" v-for="item of plantsList" :key="item.num">
      <span>{{item.name}}</span><span>{{item.flowsclass}}</span>
      <input @click="water" type="button" value="浇水">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyPlantsInfo',
  props: {
    plantsList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    water () {
      axios.get('/api/hhb/water.action', {
        params: {
          info: 'water'
        }
      }).then((res) => {
        if (res.data.result) {
          alert('浇水成功')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .info
    padding: 0 .3rem
    .wrapper
      position: relative
      line-height: 1rem
      span
        padding: 0 .4rem
      input
        position: absolute
        top: .2rem
        right: 0
        line-height: .6rem
        padding: 0 .2rem
        background: $bgColor
        color: #fff
        border-radius: .06rem
</style>
