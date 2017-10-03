<template> 
  <div>
    <swiper class="carousel" :options="swiperOption">
      <swiper-slide v-for="slide in swiperDatas">
        <img :src="slide">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>
  </div>
</template>  
<script src='./view.js'></script>

<style lang="less" scoped>
@import './view.less';
</style>
