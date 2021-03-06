import Vue from 'vue'
import Router from 'vue-router'
import tuijian from './../components/tuijian/tuijian.vue'
import singer from './../components/singer/singer.vue'
import rank from './../components/rank/rank.vue'
import search from './../components/search/search.vue'
import singerList from './../components/singer/SingerListDetail.vue'
import singerDetail from './../components/singer/singerDetailinfo.vue'
import rankList from './../components/rank/rankList.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tuijian',
      component: tuijian
    },
    {
      path: '/singer',
      component: singer,
      children: [
        {
          path: 'list/:typeid',
          component: singerList
        }
      ]
    },
    {
      path: '/singer/info',
      component: singerDetail
    },
    {
      path: '/rank',
      component: rank,
      children:[
        {
          path:':topid',
          component:rankList
        }
      ]
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/',
      redirect: ('/tuijian')
    },
    {
      path: '/*',
      redirect: ('/tuijian')
    }
  ]
})

