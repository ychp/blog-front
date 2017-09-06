<template> 
  <div class="container">
    <myArticle navTitle="博客" dataSouce="blogs"> </myArticle>
  </div>
</template>  
<script>
import myArticle from './list/view.vue'
export default {
  components: {
    myArticle
  }
}
</script>

<style lang="less" scoped>
.container-fluid {
  padding-top: 20px;
}
</style>
