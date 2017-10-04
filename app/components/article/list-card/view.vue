<template>
  <div class="card">
    <div class="card-title">
      <div class="row">
        <div class='col'><span class="text">{{ title }}</span></div>
        <div class='col col-lg-3 text-right'><a class="more" :href="linkUrl">更多</a></div>
      </div>
    </div>
    <div class="items">
      <div 
        class="row item" 
        v-for="(data, index) in datas"
        v-bind:class="{ last: index == datas.length - 1 }">
        <div class="col title">{{ data.title }}</div>
        <div class="col col-lg-3 date text-right">{{ data.createAt | dateCn }}</div>
      </div>
    </div>
  </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>