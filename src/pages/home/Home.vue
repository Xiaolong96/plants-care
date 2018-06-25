<template>
  <div class="home">
    <home-header></home-header>
    <home-function></home-function>
    <home-recommend :recommendList="recommendList"></home-recommend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeFunction from './components/function'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  data () {
    return {
      recommendList: []
    }
  },
  components: {
    HomeHeader,
    HomeFunction,
    HomeRecommend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json') // /api/hhb/recom.action
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret || res.data) {
        const data = res.data
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .home
    &:before
      content: ' ';
      position: fixed;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url('bgImg.jpg') left top/100% 100% no-repeat fixed
</style>
