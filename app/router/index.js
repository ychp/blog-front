import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/view.vue'
import Index from '@/components/index/view.vue'
import Blog from '@/components/blog/view.vue'
import WEB from '@/components/web/view.vue'
import News from '@/components/news/view.vue'
import Detail from '@/components/article/detail/view.vue'
import NotFound from '@/components/error/404'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/web',
    name: 'Web',
    component: WEB
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      component: Main,
      children: routers
    }
  ]
})
