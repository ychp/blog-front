<template>
  <div class="popular">
    <b-navbar toggleable="md" type="secondary" variant="faded" class="popular-nav">
        <div class="title">
          <span class='text'>浏览最多</span>
        </div>
    </b-navbar>
    <div class="content" v-for="article in articles">
      <b-row class="top">
        <b-col class="title">
          {{ article.title }}
        </b-col>
        <b-col cols="7" class="summary text-right">
          <span>阅读{{ article.reads }}</span>
        </b-col>
      </b-row>
      <b-row class="bottom">
        <b-col cols="7" class="date text-left">
          {{ article.createAt | dateSlash }}
        </b-col>
        <b-col class="text-right">
          更多
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>