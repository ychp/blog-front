
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
        }
      ]
    }
  },
  created () {
    var route = this.$route
    this.currentPath = route.path
  },
  methods: {
    toggleNav (obj) {
      var currentUl = obj.currentTarget.parentNode
      var classes = currentUl.className
      if (classes.indexOf('close') > -1) {
        classes = classes.replace(' close', '')
      } else {
        classes = classes.concat(' close')
      }
      currentUl.setAttribute('class', classes)
    }
  }
}
