<template>
    <nav class="pagination is-centered is-medium" role="navigation" aria-label="pagination" v-if="list">
        <a class="pagination-previous" @click="previousPage()">Previous </a>
        <a class="pagination-next" @click="nextPage()">Next page</a>
        <ul class="pagination-list">
            <li><a class="pagination-link" id="first" @click="getPage(0)">1</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>            
            <li><a class="pagination-link is-current" id="middle">{{page}}</a></li>            
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a class="pagination-link" id="last" @click="getPage(parseInt(list.length/15))">{{parseInt(list.length/15)}}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name : 'pagination',
    props : ['list', 'getPage', 'previousPage', 'nextPage', 'page', 'ending']
}
</script>

<style>

</style>