<template>
  <div class="header border-bottom">
    <div class="logo">HuaHuiBao</div>
    <div class="wrapper" ref="wrapper">
      <div v-show="showWelcomeInfo" @click="showLogout">Welcome {{name}}!</div>
      <div v-show="!showWelcomeInfo">
        <router-link to="/reg">
          <div class="header_right">
            注册
          </div>
        </router-link>
        <router-link to="/login">
          <div class="header_right">
            登陆
          </div>
        </router-link>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="logout" @click="logout" v-show="show">注销</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      show: false,
      showWelcomeInfo: false
    }
  },
  computed: {
    ...mapState(['name'])
  },
  methods: {
    showLogout () {
      this.show = !this.show
    },
    logout () {
      this.$store.commit('changeStatus', {
        name: '',
        token: false
      })
      this.show = false
      this.showWelcomeInfo = false
    },
    check () {
      if (this.name) {
        this.showWelcomeInfo = true
      }
    }
  },
  activated () {
    this.check()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .header
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    z-index: 999
    background: $bgColor
    // box-shadow: 0 .002rem .1rem #fff
    .logo
      float: left
      text-indent: .4rem
      font: italic 600 .36rem/$headerHeight "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif
      color: #fff
    .wrapper
      float: right
      line-height: $headerHeight
      min-width: 1.6rem
      padding: 0 .3rem
      text-align: center
      color: #fff
      .header_right
        float: right
        min-width: .8rem
        text-align: center
        color: #fff
      .clearfix
        *zoom: 1
        &:after
          display: block
          content: ''
          clear: both
          height: 0
          overflow: hidden
          visibility: hidden
    .logout
      position: absolute
      top: $headerHeight
      right: .5rem
      width: 1rem
      line-height: .6rem
      text-align: center
      background: #fff
</style>
