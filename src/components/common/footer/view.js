
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
          name: 'Bootstrap',
          url: 'http://www.bootcss.com/s'
        }
      ]
    }
  }
}
