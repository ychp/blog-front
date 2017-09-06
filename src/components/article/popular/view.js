
export default {
  name: 'popular',
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      // todo 数据获取
      this.articles = [
        {
          title: 'title(0)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title(1)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title(2)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        }
      ]
    }
  }
}
