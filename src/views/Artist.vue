<template>
  <div class="content">
    
    <p>page artist {{artist}}</p>
  </div>
</template>

<script>
// import Axios from 'axios'

export default {
    name: 'artist',
    props: ['artist'],
    data(){
      return {
        theArtist: null
      }
    }
    // beforeMount(){
    //   // Axios
    //   //   .get('https://api.scryfall.com/cards/search?artist=' + artist)
    //   //   .then(response => {
    //   //     console.log(response);
    //   //   })
    // }
    
}
</script>

<style>

</style>