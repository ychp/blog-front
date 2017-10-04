export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: () => 'title'
    },
    datas: {
      type: Array,
      default: () => [
        {
          title: 'card-data-title-1',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 1
        },
        {
          title: 'card-data-title-2',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 10
        },
        {
          title: 'card-data-title-3',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 100
        },
        {
          title: 'card-data-title-4',
          createAt: 1504276666001,
          author: 'ychp',
          desc: 'description',
          reads: 1000
        }
      ]
    },
    linkUrl: {
      default: () => '/blogs'
    }
  }
}
