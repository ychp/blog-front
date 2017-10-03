<template>
  <div class="articles">
    <div class="article-nav">
        <div class="title">
          <span class='text'>{{ navTitle }}</span>
        </div>
    </div>
    <div class="content" v-for="article in articles">
      <div class="row">
        <div class="col title text-left">{{ article.title }}</div>
        <div class="col date text-right" >{{ article.createAt | dateCn }}</div>
      </div>
      <div class="description">{{ article.desc }}</div>
      <div class="summary"><span>阅读{{ article.reads }}</span></div>
    </div>
    <pagination v-bind:current-page="currentPage" v-bind:pages="pages" v-bind:link-gen="paging"></pagination>
  </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>