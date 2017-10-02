<template>
  <div class="app">
    <my-nav></my-nav>    
    <router-view class="center"></router-view>
    <my-footer></my-footer> 
  </div>
</template>

<script>
import myNav from './common/nav/view.vue'
import myFooter from './common/footer/view.vue'
export default {
  name: 'app',
  data () {
    return {
      menuCount: 4,
      menus: [
        '/',
        '/blogs',
        '/news',
        '/web'
      ],
      iconClass: [
        'iconfont icon-shouye vertical-middle',
        'fa fa-file-text-o',
        'fa fa-newspaper-o',
        'fa fa-code'
      ]
    }
  },
  components: {
    myNav,
    myFooter
  }
}
</script>

<style lang='less' scoped>
.app {
  width: 100%;
  height: 100%;
}

.center {
  background-color: #fff;
  min-height: 400px;
  padding-top: 20px;
}

</style>
