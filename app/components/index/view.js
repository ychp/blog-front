require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'index',
  data () {
    return {
      swiperDatas: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507034309977&di=bdea64b3d1b0016d62c527a09cdc2acc&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F130417%2F240451-13041FA54685.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507034384131&di=f5303a2e7caec957334a9fc91aa16dca&imgtype=0&src=http%3A%2F%2Fpic63.nipic.com%2Ffile%2F20150330%2F2531170_114008051000_2.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507034549335&di=9130e3148d1f2811dd4f313687d7cb13&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201608%2F2016083110.jpg'
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        preloadImages: false,
        lazyLoading: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        mousewheelControl: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
