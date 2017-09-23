<template>
  <div class="popular">
    <div toggleable="md" type="secondary" variant="faded" class="popular-nav">
        <div class="title">
          <span class='text'>浏览最多</span>
        </div>
    </div>
    <div class="content" v-for="article in articles">
      <div class="row top">
        <div class="col title">
          {{ article.title }}
        </div>
        <div class="col col-lg-7 summary text-right">
          <span>阅读{{ article.reads }}</span>
        </div>
      </div>
      <div class="row bottom">
        <div class="col col-lg-7 date text-left">
          {{ article.createAt | dateSlash }}
        </div>
        <div class="col text-right">
          更多
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>