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

<style lang='less'>
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

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.container {
  margin: auto;
  margin-top: 15px;
  @media (min-width: 0px) {
    width: 95%;
    max-width: 500px;
  }
  @media (min-width: 600px) {
    width: 500px;
    max-width: 100%;
  }
  @media (min-width: 700px) {
    width: 600px;
  }
  @media (min-width: 800px) {
    width: 700px;
  }
  @media (min-width: 900px) {
    width: 800px;
  }
  @media (min-width: 1000px) {
    width: 900px;
  }
  @media (min-width: 1100px) {
    width: 1000px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
  }
}

a {
  text-decoration: none;
}

body {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", Arial, Verdana, Tahoma, sans-serif;
  color: #555;
}

</style>