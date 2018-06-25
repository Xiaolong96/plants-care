import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    // component: Home
    meta: {
      keepAlive: true,
      requireAuth: false
    },
    component: resolve => require(['@/pages/home/Home'], resolve)
  }, {
    path: '/detail/:id', // 记得在动态路由前加上反斜杠
    name: 'Detail',
    // component: Detail
    meta: {
      keepAlive: false
    },
    component: resolve => require(['@/pages/detail/Detail'], resolve)
  }, {
    path: '/login',
    name: 'Login',
    // component: Login
    meta: {
      keepAlive: false
    },
    component: resolve => require(['@/pages/login/Login'], resolve)
  }, {
    path: '/reg',
    name: 'Register',
    // component: Register
    meta: {
      keepAlive: false
    },
    component: resolve => require(['@/pages/reg/Register'], resolve)
  }, {
    path: '/myPlants',
    name: 'MyPlants',
    // component: MyPlants
    meta: {
      keepAlive: false,
      requireAuth: true
    },
    component: resolve => require(['@/pages/myPlants/MyPlants'], resolve)
  }, {
    path: '/addPlants',
    name: 'AddPlants',
    // component: AddPlants
    meta: {
      keepAlive: true,
      requireAuth: true
    },
    component: resolve => require(['@/pages/addPlants/AddPlants'], resolve)
  }, {
    path: '/recordQuery',
    name: 'RecordQuery',
    // component: RecordQuery
    meta: {
      keepAlive: false,
      requireAuth: true
    },
    component: resolve => require(['@/pages/recordQuery/RecordQuery'], resolve)
  }, {
    path: '/enviParam',
    name: 'EnviParam',
    // component: enviParam
    meta: {
      keepAlive: false,
      requireAuth: true
    },
    component: resolve => require(['@/pages/enviParam/EnviParam'], resolve)
  }, {
    path: '/recognization',
    name: 'Recognization',
    // component: recognization
    meta: {
      keepAlive: false,
      requireAuth: false
    },
    component: resolve => require(['@/pages/recognization/Recognization'], resolve)
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
