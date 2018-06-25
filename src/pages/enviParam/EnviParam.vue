<template>
  <div>
    <my-plants-header></my-plants-header>
    <env-param-info :recordList="recordList"></env-param-info>
  </div>
</template>

<script>
import axios from 'axios'
import MyPlantsHeader from '@/pages/myPlants/components/Header'
import EnvParamInfo from './components/Info'
export default {
  name: 'EnviParam',
  data () {
    return {
      recordList: {}
    }
  },
  components: {
    MyPlantsHeader,
    EnvParamInfo
  },
  methods: {
    getInfo () {
      axios.get('/api/hhb/evn.action')
        .then((res) => {
          this.recordList = res.data
        }).catch((res) => {
          alert(res)
        })
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
