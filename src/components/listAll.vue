<template>
    <div class="column is-two-fifths">
        <div class="content" v-if="list">
            <ul id="cards-list">
                <li v-for="item in list.slice(beginning, ending)" :key="item" @click="getCard(item)"><button class="button is-fullwidth">{{item}}</button></li>
            </ul>
        </div>
        
    </div>
</template>

<script>


export default {
    name : 'listAll',
    props: ['list', 'getCard', 'beginning', 'ending'],
}
</script>

<style>

li{
    cursor: pointer;
    list-style: none;
}
</style>