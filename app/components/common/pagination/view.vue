<template>
    <div class="pagination">
        <ul class="pagination-nav justify-content-center">
            <li class="page-item pre" v-bind:class="{ disabled: currentPage == 1 }">
                <button class="page-link" 
                    @click="gotoPage(currentPage <= 1 ? 1: currentPage - 1)"
                    :disabled="currentPage <= 1"
                >
                    <span>&laquo;</span>
                </button>
            </li>
            <li class="page-item" 
                v-for="(i, index) in indexs" 
                v-bind:class="{  disabled: i == currentPage || i < 1 , active: i == currentPage, last: index == indexs.length - 1 }"
            >
                <button 
                    class="page-link" 
                    @click="gotoPage(i)" 
                    :disabled="i < 1 || i == currentPage">
                    <span>{{ i < 1 ? "..." : i }}</span>
                </button>
            </li>
            <li class="page-item next" 
                v-bind:class="{ disabled: currentPage == pages }"
                
            >
                <button 
                    class="page-link"
                    @click="gotoPage(currentPage >= pages ? pages: currentPage + 1)"
                    :disabled="currentPage >= pages"
                >
                    <span>&raquo;</span>
                </button>
            </li>
        </ul>
    </div>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>