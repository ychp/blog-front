<template>
  <div class="articles">
    <b-navbar toggleable="md" type="secondary" variant="faded" class="article-nav">
        <div class="title">
          <span class='nav-link'>{{ navTitle }}</span>
        </div>
    </b-navbar>
    <div class="content" v-for="article in articles">
      <div class="date" >{{ article.createAt | dateCn }}</div>
      <div class="title">{{ article.title }}</div>
      <div class="description">{{ article.desc }}</div>
      <div class="summary"><span>阅读{{ article.reads }}</span></div>
    </div>
    <b-pagination-nav
      class="pagination-nav"
      align="center" 
      :link-gen="paging" 
      :number-of-pages="pages" 
      v-model="currentPage"
    />
  </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>