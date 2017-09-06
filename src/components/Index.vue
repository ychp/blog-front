<template> 
  <div class="container">
    <b-container>
      <b-row>
        <b-col cols="9">
          <myArticle navTitle="最新" dataSouce="index"></myArticle>
        </b-col>
        <b-col cols="3">
          <myPopular></myPopular>
        </b-col>
      </b-row>
    </b-container>
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
