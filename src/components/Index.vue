<template> 
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col col-lg-9">
          <myArticle navTitle="最新" dataSouce="index"></myArticle>
        </div>
        <div class="col col-lg-3">
          <myPopular></myPopular>
        </div>
      </div>
    </div>
  </div>
</template>  
<script>
import myArticle from './article/list/view.vue'
import myPopular from './article/popular/view.vue'
export default {
  components: {
    myArticle,
    myPopular
  }
}
</script>

<style lang="less" scoped>
</style>
