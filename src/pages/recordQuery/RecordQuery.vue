<template>
  <div>
    <my-plants-header></my-plants-header>
    <record-query-info :recordList="recordList"></record-query-info>
  </div>
</template>

<script>
import axios from 'axios'
import MyPlantsHeader from '@/pages/myPlants/components/Header'
import RecordQueryInfo from './components/Info'
export default {
  name: 'RecordQuery',
  data () {
    return {
      recordList: []
    }
  },
  components: {
    MyPlantsHeader,
    RecordQueryInfo
  },
  methods: {
    getInfo () {
      axios.get('/api/hhb/record.action')
        .then((res) => {
          res = res.data
          this.recordList = res.data.water
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
