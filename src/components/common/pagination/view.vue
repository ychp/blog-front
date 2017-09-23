<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination pagination-nav justify-content-center">
            <li class="page-item" v-bind:class="{ disabled: currentPage == 1 }">
                <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="page-item" 
                v-for="i in indexs" 
                v-bind:class="{ disabled: i < 1, active: i == currentPage }"
            >
                <a class="page-link" :href="gotoPage(i)" >{{ i < 1 ? "..." : i }}</a>
            </li>
            <li class="page-item" v-bind:class="{ disabled: currentPage == pages }">
                <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script src='./view.js'></script>
<style lang='less' scoped>
@import './view.less';
</style>