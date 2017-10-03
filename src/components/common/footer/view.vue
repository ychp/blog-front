<template>
    <div class="footer">
        <div class="mode-link text-center">
        <h3 class="t-h3">友情链接</h3>
        <ul class="list-inline justify-content-center">
            <li class="friend-link" v-for="(link, index) in inlineLinks" v-bind:class="{ 'new-line': (index + 1) % 2 == 0 }">
                <a v-bind:href="link.url" target="_blank">{{ link.name }}</a>
            </li>
        </ul>
        </div>
        <div class="copy">
        <p class="copyright text-center">Copyright © 2017. Ychp</p>
        </div>
    </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>