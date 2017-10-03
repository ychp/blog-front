<template>
  <div class="app">
    <my-nav></my-nav>    
    <router-view class="center"></router-view>
    <my-footer></my-footer> 
  </div>
</template>

<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>
