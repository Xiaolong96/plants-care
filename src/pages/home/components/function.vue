<template>
  <div class="function">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <router-link tag="div" to="/myPlants" class="wrapper">
          <div class="item">
            <div class="iconfont">&#xe6af;</div>
            <span class="itemInfo">我的花卉</span>
          </div>
        </router-link>
        <router-link tag="div" to="/addPlants" class="wrapper">
          <div class="item">
            <div class="iconfont">&#xe74a;</div>
            <span class="itemInfo">添加花卉</span>
          </div>
        </router-link>
        <router-link tag="div" to="/recordQuery" class="wrapper">
          <div class="item">
            <div class="iconfont">&#xe632;</div>
            <span class="itemInfo">记录查询</span>
          </div>
        </router-link>
        <router-link tag="div" to="/enviParam" class="wrapper">
          <div class="item">
            <div class="iconfont">&#xe638;</div>
            <span class="itemInfo">环境参数</span>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link tag="div" to="/recognization" class="wrapper">
          <div class="item">
            <div class="iconfont">&#xe63b;</div>
            <span class="itemInfo">智能识别</span>
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeFunction',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .function >>> .swiper-container
    width: 100%
    height: 4.4rem
  .function >>> .swiper-pagination-bullet
    width: 6px !important
    height: 6px !important
    background: #fff
  .function
    padding: 1.06rem .2rem 0
    .clearfix
      *zoom: 1
      &:after
        display: block
        content: "fdsgsdfg"
        clear: both
        height: 0
        overflow: hidden
        visibility: hidden
    .wrapper
      position: relative
      overflow: hidden
      float: left
      width: 50%
      height: 2rem
      // padding-bottom: 30%
      .item
        position: absolute
        top: .1rem
        left: .1rem
        right: .1rem
        bottom: .1rem
        display: flex
        flex-direction: column
        justify-content: space-around
        // border: .002rem solid #fff
        border-radius: .1rem
        background: rgba(0, 0, 0, .2)
        color: #fff
        text-align: center
        .iconfont
          width: 1.1rem
          height: 1.1rem
          line-height: 1.1rem
          margin: 0 auto
          font-size: .6rem
        .itemInfo
          font-size: .32rem
</style>
