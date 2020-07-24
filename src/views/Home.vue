<template>
  <div class="section">
    <div class="columns">
      <card 
        :card="cardInfo"
        :getArtist="getArtist"
        :getColor="getColor"
        :verifText="verifText"
      />
      <listAll 
        :list="listing" 
        :getCard="getCard" 
        :beginning="beginning" 
        :ending="ending"
      />
    </div>
    <pagination 
      :getPage="getPage" 
      :list="listing"
      :page="page"
      :previousPage="previousPage" 
      :nextPage="nextPage"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import listAll from '@/components/listAll.vue'
import card from "@/components/card.vue"
import pagination from '@/components/pagination.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    listAll,
    card,
    pagination
  },
  data(){
    return {
      listing : null,
      cardInfo : null,
      page : 0,
      beginning : 0,
      ending : 15
    }
  },
  beforeMount () {
    axios
      .get('https://api.scryfall.com/catalog/card-names')
      .then(response => {
        this.listing = response.data.data
      })
  },
  methods : {
    getCard(item) {
      let url = 'https://api.scryfall.com/cards/named?exact=' + item;
      axios
        .get(url)
        .then(response => {
          this.cardInfo = response.data;
        })
    },
    getPage(page){
      this.beginning = page * 15;
      this.ending = this.beginning + 15;
      this.page = page;
    },
    nextPage(){
      if (this.page < parseInt(this.listing.length/15)) {
        this.getPage(this.page + 1)
      }
    },
    previousPage(){
      if (this.page > 0) {
        this.getPage(this.page - 1)
      }
    },
    getColor(color){
      let img = `https://img.scryfall.com/symbology/${color}.svg`
      return img;
    },
    getArtist(artist){
      let url = 'https://api.scryfall.com/cards/search?q=a:' + artist
      axios
        .get(url)
        .then(() => {

          //find artist
        })
    },
    verifText(text){
      const patern = /\{.\}|\{.\/.\}|\{\w\}/g;
      let match = text.match(patern);
      if (match) {
      match.forEach(element => {
        let newtext = element.replace('{', '');
        newtext = newtext.replace('}', '');
        newtext = newtext.replace('/', '');
        newtext = `<img src="https://img.scryfall.com/symbology/${newtext}.svg">`;
        text = text.replace(element, newtext);
      });
      }
      return text;
    }
  }
}
</script>
