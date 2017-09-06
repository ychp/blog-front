import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Index from '@/components/Index'
import Blog from '@/components/article/Blog'
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
    component: Index
  },
  {
    path: '/web',
    name: 'Web',
    component: Index
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
