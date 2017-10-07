import pagination from '../../common/pagination/view.vue'

export default {
  name: 'article',
  components: {
    pagination
  },
  props: {
    navTitle: {
      type: String
    },
    dataSouce: {
      type: String
    }
  },
  data () {
    return {
      currentPage: 1,
      articles: [],
      pages: 20,
      keyword: ''
    }
  },
  created () {
    var query = this.$route.query
    this.currentPage = query.pageNo === undefined ? 1 : parseInt(query.pageNo)
    this.keyword = query.keyword === undefined ? '' : query.keyword
    this.initData(this.keyword, this.currentPage)
  },
  methods: {
    initData (keyword, pageNo) {
      // todo 数据获取
      this.articles = [
        {
          title: 'title' + pageNo + '(0)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(1)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(2)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(3)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(4)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(5)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(6)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(7)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(8)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'title' + pageNo + '(9)',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        }
      ]
    },
    paging (pageNo) {
      var baseUrl = this.dataSouce === 'index' ? '/' : '/' + this.dataSouce
      return baseUrl + '?keyword=' + this.keyword + '&pageNo=' + pageNo
    }
  }
}
