
export default {
  name: 'footer',
  props: {
    inlineLinks: {
      type: Array,
      default: () => [
        {
          name: 'Vue',
          url: 'https://cn.vuejs.org/'
        },
        {
          name: 'Iconfont',
          url: 'http://iconfont.cn/'
        },
        {
          name: 'Fangluyu',
          url: 'http://fangluyu.cn/'
        }
      ]
    }
  }
}
