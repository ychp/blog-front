<template>
  <transition name="slide-fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
html {
  padding: 0px;
  margin: 0px;
}
body {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", Arial, Verdana, Tahoma, sans-serif;
  color: #555;
}
p {
  font-size: 14px;
}

.slids-fade-enter-active {
  transition: all .3s ease;
}
.slids-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slids-fade-enter, .slids-fade-leave {
  transform: translateX(-430px);
  opacity: 0;
}
</style>
