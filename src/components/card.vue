<template>
    <div class="column is-centered">
        <div class="card" v-if="card">
            <div class="card-image">
                <figure class="image">
                    <img :src="card.image_uris.normal">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{card.name}}</p>
                        <p class="subtitle is-6" @click="getArtist(card.artist)">{{'@'+card.artist}}</p>
                    </div>
                </div>
                <div class="content">
                    <article class="message is-dark" v-if="card.colors.length > 0">
                        <div class="message-body">
                            <p> Color : <span v-for="color in card.colors" :key="color"><img :src="getColor(color)"></span></p>
                         </div>
                    </article>
                    <p v-html="verifText(card.oracle_text)"></p>
                    <article class="message">
                        <div class="message-body" v-if="card.flavor_text">
                            {{card.flavor_text}}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'card',
    props : ['card', 'getArtist', 'getColor', 'verifText']
}
</script>

<style>
.card{
    background-color: rgba(255,255,255, 0.5);
    border-radius: 5px;
}
.image img{
    border-radius: 15px;
    height: 35vh;
    width: auto;
}
.image{
    justify-content: center;
    display: flex;
}
.card{
    position: sticky;
}
.message-body img{
    height: 30px;
    margin: 0 10px;
    display: flex;
    align-items: center;
}
.message-body p{
    display: flex;
    align-items: center;
    justify-content: center;
}
.content>p>img{
    height: 17px;
}
</style>