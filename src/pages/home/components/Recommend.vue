<template>
  <div class="recommend">
    <div class="title">精选文章</div>
    <ul>
      <router-link
      tag="li"
      class="item border-bottom"
      v-for="recItem of recommendList"
      :key="recItem.id"
      :to="'/detail/' + recItem.id"
      >
        <img class="item-img" :src="recItem.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{recItem.title}}</p>
          <p class="item-desc">{{recItem.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      default: function () {
        return [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg',
          title: '蓝石莲',
          desc: '谷内山峰挺立峭拔，天上美景落人间'
        }]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    height: .6rem
    line-height: .6rem
    text-indent: .2rem
    background: #eee
    font-size: .32rem
  .item
    overflow: hidden
    display: flex
    width: 100%
    height: 2.2rem
    .item-img
      display: block
      width: 1.8rem
      height: 1.8rem
      padding: .2rem
    .item-info
      flex: 1
      padding: .2rem
      min-width: 0  //？
      .item-title
        line-height: .6rem
        font-size: .32rem
        color: #fff
        ellipsis()
      .item-desc
        line-height: .5rem
        color: #ccc
        ellipsis()
      .item-btn
        line-height: .4rem
        margin-top: .2rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>
