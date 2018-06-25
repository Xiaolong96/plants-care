<template>
  <div class="header">
    <router-link to="./">
      <div class="iconfont back_icon">&#xe624;</div>
    </router-link>
    <p class="title">登陆花卉宝</p>
    <p>呵护你的植物</p>
  </div>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .header
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    overflow: hidden
    height: 2rem
    line-height: .6rem
    background: $bgColor
    color: #fff
    text-align: center
    .back_icon
      position: absolute
      top: .08rem
      left: .1rem
      width: .72rem
      line-height: .72rem
      text-align: center
      color: #fff
    .title
      font-size: .36rem
</style>
