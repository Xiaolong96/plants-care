<template>
  <div class="register">
    <login-header></login-header>
    <register-input @handleData="handleData"></register-input>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
import LoginHeader from '@/pages/login/components/Header'
import RegisterInput from './components/Input'
export default {
  name: 'Register',
  data () {
    return {
      url: '/api/hhb/reg.action'
    }
  },
  components: {
    LoginHeader,
    RegisterInput
  },
  methods: {
    handleData (data) {
      // console.log(data)
      var dataString = qs.stringify(data)
      axios.post(this.url, dataString, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        // alert(res.data.ret)
        this.$store.commit('changeStatus', {
          name: data.name,
          token: true
        })
        this.$router.push({
          path: '/'
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
