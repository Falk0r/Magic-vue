# Magic-vue

![Magic the gathering](https://cdn.puregamemedia.fr/wp-content/uploads/2017/09/logo_mtg.png)

A la base, ce projet a été proposé lors de ma formation en developpement web et mobile de la IT-Akademy. Le but étant de nous faire revoir les bases de javascript et l'utilisation d'API.

J'ai décidé de "corser" un peu la chose et de transposer le cours sur le framework __VueJS__ fraichement acquis.

Le CSS est géré par le framework __Bulma__.

Vous trouverez la base du cours (un peu inachevé du coup) dans le dossier __projectJS__ de cette application.

Le projet repose sur l'API [scryfall.com](https://scryfall.com/docs/api) du très populaire jeu __Magic the Gathering__.

## Transposition

Après analyse du fichier __HTML__, nous pouvons distinguer 3 composants __Vue.js__ :
* La liste des cartes : listAll.vue
* Le détail de la carte : card.vue
* La pagination : pagination.vue

Suivant les bonnes pratiques, ces élements sont placés dans le dossier __components__.

>Le router est optionnel pour le moment, mais permettra l'ajout de nouvelles fonctionnalités facilement.

Entrons dans le détail de la vue __Home.vue__ gérant pour le moment l'application.

## Home.vue

La plupart des fonctionnalités du fichier __javascript__ de base sont transposés dans ce fichier.
L'obtention de la liste des cartes s'effectue désormais avec l'aide du package __Axios__ vers notre API. Le résultat est stocké dans le data store de la vue via la variable __listing__ :

```javascript
  beforeMount () {
    axios
      .get('https://api.scryfall.com/catalog/card-names')
      .then(response => {
        this.listing = response.data.data
      })
  },
```
Nous appelons l'API et récupérons les données avant de "monter" le composant sur la page, d'où le __beforeMount__.

Ces données sont ainsi transmises au composant __listAll.vue__ via les props.
```HTML
      <listAll 
        :list="listing" 
        :getCard="getCard" 
        :beginning="beginning" 
        :ending="ending"
      />
```
Et gérées par le composant __listAll.vue__ en déroulant la liste avec une directive v-for :
```html
<li v-for="item in list.slice(beginning, ending)" :key="item" @click="getCard(item)"><button class="button is-fullwidth">{{item}}</button></li>
```
Nous remarquons la fonction __getCard(item)__ qui permet à l'utilisateur de choisir une carte parmi la liste et d'en afficher les détails. Encore une fois c'est __Home.vue__ qui fournis cette fonction à l'aide de la méthode suivante :
```javascript
getCard(item) {
      let url = 'https://api.scryfall.com/cards/named?exact=' + item;
      axios
        .get(url)
        .then(response => {
          this.cardInfo = response.data;
        })
    }
```
Cette méthode prend en paramètre le nom de la carte (item) à chercher et fait une requète à l'API. La réponse est stockée dans le data store via la variable __cardInfo__. "Magie" de __VueJS__, une modification est faite au niveau du store, le composant __card.vue__ détecte que la variable contient des données et affiche donc celle-ci.

Le composant est "mis en sommeil" avec la directive __v-if__ permettant ainsi de cacher à l'utilisateur un composant vide :
```html
<div class="card" v-if="card">
```
La spécificité de ce composant et de retranscrir les données fournis par l'API [scryfall.com](https://scryfall.com/docs/api). Des symboles, propre au jeu, sont d'ailleurs donnés dans les textes des cartes Magic sous la forme {X} ou {X/Y}.

Le choix a été de remplacer ces symboles par leurs images respectives, par l'utilisation d'un regex et du renvoi de la balise __img__ correspondante :
```javascript
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
```
L'appel de cette fonction est faite par le composant __card.vue__ et retransmis correctement à l'utilisateur :
```html
<p v-html="verifText(card.oracle_text)"></p>
```

## le CSS

Le CSS est gérée en grande partie par le framework __Bulma__ avec une installation par __npm__. Le framework est ensuite ajouté à l'application via le fichier __main.js__ et l'import suivant :
```javascript
import './../node_modules/bulma/css/bulma.css'
```

## Installation du projet
```
npm install
```

### Lancement du serveur de développement
```
npm run serve
```

## Screenshots

### Desktop
![app web](https://github.com/Falk0r/Magic-vue/raw/master/public/screen/Capture1.png)

### Responsive
![app responsive](https://github.com/Falk0r/Magic-vue/raw/master/public/screen/Capture2.png)
