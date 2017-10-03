<template>
    <nav class="nav">
        <div class="nav-content">
            <div class="nav-brand">
                <router-link :to="{ name: 'Index' }" exact>
                    忆
                </router-link>
            </div>
            <ul class="nav-items close">
                <i class="iconfont icon-liebiao2 small-nav" v-on:click="toggleNav($event)"></i>
                <i class="iconfont icon-31guanbi small-nav-close" v-on:click="toggleNav($event)"></i>
                <li class="nav-item" v-for="(menu, index) in menus" v-bind:class = "{ last: index == menus.length - 1 }">
                    <a class="nav-link" v-bind:href="menu.url" v-bind:class="{ active: currentPath == menu.url }">
                        {{ menu.title }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>