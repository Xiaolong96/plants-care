<template>
  <div class="info">
    <div class="wrapper border-bottom" v-for="item of recordList" :key="item.hum" v-if="item.hum">
      <p>温度：{{item.hum}}</p><p>空气湿度：{{item.wet}}</p><p>土壤湿度：{{item.sh}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnvParamInfo',
  props: {
    recordList: Object
  },
  data () {
    return {
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
      p
        width: 60%
        line-height: .8rem
        margin: .2rem auto
        text-align: center
        border-radius: .06rem
        background: $bgColor
        color: #fff
</style>
