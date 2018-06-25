<template>
  <div>
    <router-link to="./">
      <div class="iconfont back_icon">&#xe624;</div>
    </router-link>
    <div class="wrapper">
      <div class="iconfont add">&#xe63b;</div>
      <input class="imgInput" name="file" type="file" accept="image/*" @change="handleChange" ref="imgInput">
    </div>
    <div class="imgWrapper" v-show="imgShow">
      <img class="img" :src="imgSrc" alt="">
      <div v-show="progressShow">
        <progress class="progress" :value="progress" max="100"></progress>
        <!-- <div class="progress"
           :style="{backgroundImage:'linear-gradient(to right,#C0C7CB 0%,#C0C7CB'+this.progress+',#E1E6E9 '+this.progress+',#E1E6E9 100%)'}"></div> -->
        <span class="text">{{progress}}%</span>
      </div>
      <div class="btn" @click="handleClick">上传</div>
    </div>
    <div class="info" v-show="resSUcc">
      <p class="item border-bottom">花卉名：{{result.name}}</p>
      <p class="item border-bottom">花卉科属：{{result.family}}</p>
      <p class="item border-bottom">正确概率：{{result.score}}</p>
      <div class="img-title">示例图片</div>
      <img class="disImg" :src="result.imageUrl" alt="">
      <div class="img-title">上传图片</div>
      <img class="disImg" :src="imgSrc" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Recognization',
  data () {
    return {
      imgSrc: '',
      imgShow: false,
      progressShow: false,
      resSUcc: false,
      progress: 0,
      result: {}
    }
  },
  methods: {
    handleChange () {
      this.imgShow = true
      const input = this.$refs.imgInput
      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.readAsDataURL(input.files[0])
        reader.onload = (e) => {
          this.imgSrc = e.target.result
        }
      }
    },
    handleClick () {
      this.progressShow = true
      let self = this
      console.log(this.imgShow)
      // var self = this
      let param = new FormData()
      param.append('image', this.$refs.imgInput.files[0])
      // console.log(param.get('image'))
      let config = {
        headers: {'Content-Type': 'multipart/form-data'},
        timeout: 0,
        onUploadProgress: function (progressEvent) {
          self.progress = (progressEvent.loaded / progressEvent.total * 100 | 0)
        }
      }
      // 添加请求头
      axios.post('/api/hhb/pic.action', param, config)
        .then(res => {
          self.imgShow = false
          this.progressShow = false
          this.resSUcc = true
          res = res.data
          if (res.ret && res.data) {
            this.result = res.data
          }
        }).catch(res => {
          self.imgShow = false
          this.progressShow = false
          alert('error')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .back_icon
    position: absolute
    top: .4rem
    left: .4rem
    width: .72rem
    line-height: .72rem
    text-align: center
    color: #fff
    z-index: 99
    border-radius: 100%
    background: rgba(0, 0, 0, .5)
  .wrapper
    overflow: hidden
    position: relative
    width: 4rem
    height: 4rem
    background: $bgColor
    margin: 1rem auto
    border: .2rem solid #ccc
    border-radius: 100%
    .add
      line-height: 4rem
      text-align: center
      font-size: 1rem
      color: #fff
    .imgInput
      position: absolute
      top: 0
      left: 0
      display: block
      width: 4rem
      height: 4rem
      border-radius: 100%
      opacity: 0
      z-index: 9
  .imgWrapper
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 99
    background: rgba(0, 0, 0, .8)
    .btn
      width: 60%
      line-height: .6rem
      color: #fff
      background: $bgColor
      border-radius: .06rem
      text-align: center
      margin: 1rem auto 0
    .img
      display: block
      width: 70%
      margin: 2rem auto 1rem
    .progress
      display: inline-block
      width: 80%
      height: .2rem
      margin-left: .2rem
      border-radius: .1rem
      color: green
    .text
      position: absolute
      right: .2rem
      font-size: .4rem
      font-weight: 500
      color: red
  .info
    .item
      width: 60%
      line-height: .8rem
      margin: .2rem auto
      text-align: center
      border-radius: .06rem
      background: $bgColor
      color: #fff
    .img-title
      line-height: .4rem
      padding: .2rem
      background: #eee
    .disImg
      display: block
      width: 80%
      margin: .2rem auto
</style>
