<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="header container">
        <a class="navbar-brand" href="/">憶</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link target="_self" class="nav-link" :to="{ name: 'Index' }" exact>首页</router-link>
            </li>
            <li class="nav-item">
              <router-link target="_self" class="nav-link" :to="{ name: 'Blog' }">博客</router-link>
            </li>
            <li class="nav-item">
              <router-link target="_self" class="nav-link" :to="{ name: 'News' }">资讯</router-link>
            </li>
            <li class="nav-item">
              <router-link target="_self" class="nav-link" :to="{ name: 'Web' }">WEB</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view class="center"></router-view>
    <div class="footer">
      <div class="container mode-link">
        <h3 class="t-h3">友情链接</h3>
        <ul class="list-inline">
          <li><a href="http://www.bootcss.com/s" target="_blank">Bootstrap</a></li>
          <li><a href="https://cn.vuejs.org/" target="_blank">Vue</a></li>
        </ul>
      </div>
      <div class="container">
        <p class="copyright">Copyright © 2017. Ychp</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less' scoped>
.app {
  width: 100%;
  height: 100%;
  .navbar {
    border-bottom: 1px solid #f0f0f0;
  }
  .bg-white {
    background-color: #fff !important;
  }
}
@media (min-width: 1200px){
  .container {
      max-width: 1000px;
  }
}
.center {
  background-color: #fff;
  min-height: 400px;
  padding-top: 20px;
}

div.container {
  .navbar-brand {
    color: #03a9f4;
    width: 200px;
    margin-right: 50px;
  }
  .nav-item {
    margin-left: 20px;
    margin-right: 20px;
    a {
      color: #383838;
      font-size: 15px;
    }
    a.active {
      color: #03a9f4;
    }
  }
}

.footer {
  position: relative;
  margin-top: 15px;
  padding-top: 15px;
  width: 100%;
  height: 100%;
  border-top: 0px solid #efefef;
  background-color: #f5f6f9;
  .mode-link {
    margin: 0px auto 15px;
    .t-h3 {
      font-size: 14px;
      color: #b7bac1;
      line-height: 24px;
      margin-bottom: 0px;
    }
    .list-inline {
      padding-left: 0;
      margin-left: -5px;
      list-style: none;
      margin-bottom: 0;
      li {
        line-height: 26px;
        display: inline-block;
        padding-left: 5px;
        list-style: none;
        a {
          color: #9398A2;
          font-size: 12px;
        }
      } 
    }
  }
  .copyright {
    color: #b7bac1;
    text-align: center;
    margin-bottom: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid #ebebeb;
  }
}

</style>
