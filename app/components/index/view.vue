<template> 
    <swiper class="carousel" :options="swiperOption">
      <swiper-slide v-for="slide in swiperDatas" :key="slide">
        <img :src="slide">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>
</template>  
<script src='./view.js'></script>

<style lang="less" scoped>
@import './view.less';
</style>
