<template>
  <div class="login">
    <login-header></login-header>
    <login-input @handleData="handleData"></login-input>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import LoginHeader from './components/Header'
import LoginInput from './components/Input'
export default {
  name: 'Login',
  data () {
    return {
      url: '/api/hhb/login.action'
    }
  },
  components: {
    LoginHeader,
    LoginInput
  },
  methods: {
    handleData (data) {
      let postData = qs.stringify(data)
      axios.post(this.url, postData, {
        // headers: {
        //   'content-type': 'application/x-www-form-urlencoded'
        // }
      }).then((res) => {
        // alert(res.data.ret)
        this.$store.commit('changeStatus', {
          name: data.name,
          token: true
        })
        let redirect = decodeURIComponent(this.$route.query.redirect || '/')// 获取登录成功后要跳转的路由。
        this.$router.push({
          path: redirect
        })
      }).catch((res) => {
        console.log(res)
        alert('error')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
