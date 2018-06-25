<template>
  <div class="list" ref="scrollWrapper">
    <div>
      <div class="title">花卉种类</div>
      <div class="wrapper" v-for="item of varieties" :key="item.fclass" @click="handleItemClick(item.fclass)">
        <div class="item">{{item.fclass}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'AddPlantsList',
  data () {
    return {
    }
  },
  props: {
    varieties: Array
  },
  methods: {
    handleItemClick (data) {
      this.$emit('getVal', data)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.scrollWrapper, {click: true})
  },
  activated () {
    this.scroll = new Bscroll(this.$refs.scrollWrapper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .list
    background: #eee
    .title
      line-height: .72rem
      text-indent: .2rem
    .wrapper
      display: inline-block
      width: 50%
      height: 1.2rem
      .item
        margin: .1rem .2rem
        border-radius: .06rem
        background: #fff
        line-height: 1rem
        text-align: center
</style>
