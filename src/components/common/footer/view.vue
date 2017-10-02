<template>
    <div class="footer">
        <div class="container mode-link">
        <h3 class="t-h3">友情链接</h3>
        <ul class="list-inline">
            <li v-for="link in inlineLinks">
                <a v-bind:href="link.url" target="_blank">{{ link.name }}</a>
            </li>
        </ul>
        </div>
        <div class="container copy">
        <p class="copyright">Copyright © 2017. Ychp</p>
        </div>
    </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>