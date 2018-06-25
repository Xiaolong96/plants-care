<template>
  <div class="addPlants">
    <city-header></city-header>
    <div class="wrapper">
      <input class="inp border-bottom" type="text" v-model="plantName" placeholder="请输入您所添加的花卉名称">
    </div>
    <div>
      <p class="inputVal">花卉名称：<span>{{plantName}}</span></p>
      <p class="inputVal">花卉种类：<span>{{plantVarieties}}</span></p>
      <div class="btn" @click="submit">添加</div>
    </div>
    <add-plants-list :varieties="varieties" @getVal="getVal"></add-plants-list>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import AddPlantsHeader from './components/Header'
import AddPlantsList from './components/List'
export default {
  name: 'AddPlants',
  data () {
    return {
      plantName: '',
      plantVarieties: '',
      varieties: []
    }
  },
  components: {
    AddPlantsHeader,
    AddPlantsList
  },
  methods: {
    getVal (data) {
      this.plantVarieties = data
    },
    submit () {
      let submitData = {
        plantName: this.plantName,
        plantVarieties: this.plantVarieties
      }
      submitData = qs.stringify(submitData)
      axios.post('/api/hhb/addfl.action', submitData)
        .then((res) => {
          res = res.data
          if (res.ret) {
            alert('添加成功')
          }
          this.$router.push({
            path: '/'
          })
        }).catch((res) => {
          // alert(res.data)
        })
    },
    getVarietiesInfo () {
      axios.get('/api/hhb/ffl.action')
        .then(this.getVarietiesInfoSucc)
    },
    getVarietiesInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.varieties = data.recommendList
      }
    }
  },
  mounted () {
    this.getVarietiesInfo()
  },
  activated () {
    this.plantName = ''
    this.plantVarieties = ''
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .wrapper
    height: .5rem
    padding: .2rem .6rem
    background: $bgColor
    .inp
      display: inline-block
      width: 100%
      line-height: .5rem
      text-align: center
      border-radius: .06rem
  .inputVal
    line-height: .72rem
    padding: 0 .2rem
    span
      padding: 0 .2rem
      font-style: italic
      font-weight: bold
  .btn
    width: 80%
    line-height: .6rem
    margin: .1rem auto
    background: $bgColor
    color: #fff
    text-align: center
    border-radius: .06rem
</style>
