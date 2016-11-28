import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App'
import $ from 'jquery'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const view = resolve => require(['./components/view.vue'], resolve)
const vote = resolve => require(['./components/vote.vue'], resolve)
const mood = resolve => require(['./components/mood.vue'], resolve)
const no1 = resolve => require(['./components/no1.vue'], resolve)
const random = resolve => require(['./components/ramdon.vue'], resolve)
const sgst = resolve => require(['./components/sgst.vue'], resolve)
const map = resolve => require(['./components/map.vue'], resolve)
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/view',
      component: view
    },
    {
      path: '/vote',
      component:vote
    },
    {
      path: '/mood',
      component:mood
    },
    {
      path: '/no1',
      component:no1
    },
    {
      path: '/random',
      component:random
    },
    {
      path: '/sgst',
      component:sgst
    },
    { path: "/map:id", 
      component:map
    },
    { path: "/", 
      redirect: '/vote'
    },
    { path: "*", 
      redirect: '/random'
    },
 	]
})

const store = new Vuex.Store({
  state: {
    count: [],
    votelists:[
              {id:"1",name:'jeff',order:'小肥羊(陆家浜店)',like:0,isLike:false,src:require('./assets/vote/img/1.jpg'),addr:'陆家浜路1390号2楼',type:"火锅",price:"70",lat:31.211176,lng:121.48251},
              {id:"2",name:'默认',order:'东北人家',like:7,isLike:false,src:require('./assets/vote/img/2.jpg'),addr:'局门路523号(近瞿溪路)',type:"点菜",price:"50",lat:31.201917,lng:121.48265},
              {id:"3",name:'默认',order:'麦当劳',like:0,isLike:false,src:require('./assets/vote/img/3.jpg'),addr:'陆家浜路1100号1层-05A室及B1层',type:"快餐",price:"30",lat:31.211781,lng:121.487435},
              {id:"4",name:'默认',order:'达美乐',like:0,isLike:false,src:require('./assets/vote/img/4.jpg'),addr:' 打浦桥 蒙自路169号',type:"披萨",price:"48",lat:31.206417,lng:121.477664},
              {id:"5",name:'默认',order:'崔家木炭烤肉',like:0,isLike:false,src:require('./assets/vote/img/5.jpg'),addr:'蒙自路169号智造局内(徐家汇路蒙自路口)',type:"韩国烧烤",price:"64",lat:31.206379,lng:121.477885},
              {id:"6",name:'默认',order:'富春小笼',like:0,isLike:false,src:require('./assets/vote/img/7.jpg'),addr:'愚园路650号(近镇宁路)',type:"中式点心",price:"24",lat:31.22053,lng:121.43683},
              {id:"7",name:'默认',order:'金刚馄饨',like:0,isLike:false,src:require('./assets/vote/img/8.jpg'),addr:'蒙自路207号11号楼001A(丽园路)',type:"馄饨",price:"14",lat:31.205658,lng:121.47797}]
  },
  mutations: {
  }
})

new Vue({
  el: '#app',
  store: store,
  template: '<App/>',
  router: router,
  components: { App }
})
