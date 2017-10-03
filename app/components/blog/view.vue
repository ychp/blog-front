<template> 
  <div class="container">
    <div class="row">
      <div class="col">
        <myArticle navTitle="博客" dataSouce="blogs"></myArticle>
      </div>
      <div class="col col-lg-3">
        <myPopular></myPopular>
      </div>
    </div>
  </div>
</template>

<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>
