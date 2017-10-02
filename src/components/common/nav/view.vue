<template>
    <nav class="nav">
        <div class="nav-content">
            <div class="nav-brand">
                <router-link :to="{ name: 'Index' }" exact>
                    忆
                </router-link>
            </div>
            <ul class="nav-items">
                <li class="nav-item" v-for="menu in menus">
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