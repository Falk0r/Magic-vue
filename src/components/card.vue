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
                <p>{{card.oracle_text}}</p>
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
    props : ['card', 'getArtist']
}
</script>

<style>
.image img{
    height: 45vh;
    width: auto;
}
.image{
    justify-content: center;
    display: flex;
}
.card{
    position: sticky;
}    
</style>