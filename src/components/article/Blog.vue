<template> 
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col col-lg-9">
          <myArticle navTitle="博客" dataSouce="blogs"></myArticle>
        </div>
        <div class="col col-lg-3">
          <myPopular></myPopular>
        </div>
      </div>
    </div>
  </div>
</template>  
<script>
import myArticle from './list/view.vue'
import myPopular from './popular/view.vue'
export default {
  components: {
    myArticle,
    myPopular
  }
}
</script>

<style lang="less" scoped>
.container-fluid {
  padding-top: 20px;
}
</style>
