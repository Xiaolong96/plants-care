<template>
  <div class="info">
    <div class="wrapper border-bottom" v-for="item of recordList" :key="item.num">
      <span>{{item.name}}</span><span>{{item.time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordQueryInfo',
  props: {
    recordList: Array
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
      span
        padding: 0 .4rem
</style>
