<template>
  <div class="container">
    <swiper class="carousel" :options="swiperOption">
      <swiper-slide v-for="slide in swiperDatas" :key="slide">
        <img :src="slide">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>
    <div class="row cards">
      <div class="col col-lg-5 blog"><card title="博客"></card></div>
      <div class="col news"><card title="资讯" linkUrl="/news"></card></div>
    </div>
  </div>
</template>  
<script src='./view.js'></script>

<style lang="less" scoped>
@import './view.less';
</style>
