
export default {
  name: 'nav',
  props: {
    menus: {
      type: Array,
      default: () => [
        {
          title: '首页',
          url: '/'
        },
        {
          title: '博客',
          url: '/blogs'
        },
        {
          title: '资讯',
          url: '/news'
        },
        {
          title: 'WEB',
          url: '/web'
        },
        {
          title: '简介',
          url: '/profile'
        }
      ]
    }
  },
  created () {
    var route = this.$route
    this.currentPath = route.path
  }
}
