import Vue from 'vue'
import Router from 'vue-router'
import tuijian from './../components/tuijian/tuijian.vue'
import singer from './../components/singer/singer.vue'
import rank from './../components/rank/rank.vue'
import search from './../components/search/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tuijian',
      component: tuijian
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/',
      redirect:('/tuijian')
    },
    {
      path: '/*',
      redirect:('/tuijian')
    }
  ]
})

