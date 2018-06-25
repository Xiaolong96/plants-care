<template>
  <div class="my-plants">
    <my-plants-header></my-plants-header>
    <my-plants-info :plantsList="plantsList"></my-plants-info>
  </div>
</template>

<script>
import axios from 'axios'
import MyPlantsHeader from './components/Header'
import MyPlantsInfo from './components/Info'
export default {
  name: 'MyPlants',
  data () {
    return {
      plantsList: []
    }
  },
  components: {
    MyPlantsHeader,
    MyPlantsInfo
  },
  methods: {
    getInfo () {
      axios.get('/api/hhb/myPlants.action')
        .then((res) => {
          res = res.data
          this.plantsList = res.data.myPlants
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
