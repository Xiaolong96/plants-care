<template>
  <div class="reg">
    <ul>
      <li class="wrapper border-bottom">
        <input type="text" id="name" placeholder="请输入用户名" required="required" class="inp" v-model="name" />
        <span class="succTip">{{succInfo_1}}</span>
      </li>
      <li class="wrapper border-bottom">
        <input type="password" id="password" placeholder="请输入8-16位的密码" required="required" class="inp" v-model="password" />
        <span class="succTip">{{succInfo_2}}</span>
      </li>
    </ul>
    <div class="submit" @click="handleSubmit">登陆</div>
    <div class="errorTip" v-show="show">{{errorInfo}}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginInput',
  data () {
    return {
      show: false,
      errorInfo: '',
      succInfo_1: '',
      succInfo_2: '',
      name: '',
      password: '',
      inputData: []
    }
  },
  methods: {
    display () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 800)
    },
    handleSubmit () {
      var flag = true
      this.inputData = [
        this.name,
        this.password
      ]
      for (let i = 0; i < this.inputData.length; i++) {
        if (this.inputData[i] === '') {
          this.errorInfo = '输入不能为空!'
          this.display()
          flag = false
          return
        } else {
          this.inputData[i] = this.inputData[i].replace(/(^\s*)|(\s*$)/g, '')
        }
      }
      if (flag === true) {
        if (!(/^[\u2E80-\uFE4F0-9a-zA-Z]{2,6}$/.test(this.inputData[0]))) {
          this.errorInfo = '用户名：请输入2-6个英文数字或中文字符!'
          this.display()
          flag = false
        } else {
          this.succInfo_1 = '✔'
        }
      }
      if (flag === true) {
        if (!(/^(?![^a-zA-Z]+$)(?!\\D+$).{8,16}$/.test(this.inputData[1]))) {
          this.errorInfo = '密码：至少包含一个数字和字母!'
          this.display()
          flag = false
        } else {
          this.succInfo_2 = '✔'
        }
      }
      if (flag === true) {
        let dataJson = {
          name: this.name,
          password: this.password
        }
        this.$emit('handleData', dataJson)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .border-bottom
    &:before
      border-color: #ccc
      border-width: .04rem
    &:after
      border-color: #ccc
      border-width: .04rem
  .reg
    position: ralative
    padding: .4rem
  .wrapper
    width: 100%
    line-height: 1rem
    .inp
      padding: 0 .2rem
    .succTip
      float: right
      color: green
  .submit
    margin-top: 1rem
    line-height: .64rem
    text-align: center
    border-radius: .06rem
    background: $bgColor
    color: #fff
  .errorTip
    position: absolute
    top: 1rem
    left: .4rem
    right: .4rem
    line-height: 2rem
    padding: 0 .4rem
    background: red
    color: #fff
    border-radius: .06rem
    text-align: center
</style>
