require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'index',
  data () {
    return {
      swiperDatas: [
        'http://www.yingchengpeng.com/static/head.jpg',
        'https://placehold.it/360x270'
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
