
export default {
  name: 'pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 20
    },
    linkGen: {
      type: Function
    }
  },
  computed: {
    indexs: function () {
      var maxShow = 9
      var halfShow = 4
      var left = 1
      var right = this.pages
      var ar = []
      if (this.pages >= maxShow) {
        if (this.currentPage > halfShow && this.currentPage < this.pages - halfShow + 1) {
          left = this.currentPage - (halfShow - 1)
          right = this.currentPage + halfShow
        } else {
          if (this.currentPage <= halfShow) {
            left = 1
            right = maxShow
          } else {
            right = this.pages
            left = this.pages - maxShow
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      if (ar[0] > 1) {
        ar[0] = 1
        ar[1] = -1
      }
      if (ar[ar.length - 1] < this.pages) {
        ar[ar.length - 1] = this.pages
        ar[ar.length - 2] = 0
      }
      return ar
    }
  },
  methods: {
    gotoPage (pageNo) {
      return this.linkGen(pageNo)
    }
  }
}
