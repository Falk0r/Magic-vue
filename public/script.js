const listCard = document.querySelector('#cards-list')
const listing = [];
var num = 25;
//Pagination
const lastPage = document.querySelector('#last')
const middle = document.querySelector('#middle')
const previousTab = document.querySelector('#previous')
const nextTab = document.querySelector('#next')


function allCards() {
    fetch('https://api.scryfall.com/catalog/card-names')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        const cards = data.data
        for (let index = 0; index < cards.length; index++) {
            // let listElement = document.createElement('li');
            const element = cards[index];
            // listElement.textContent = element;
            // listCard.appendChild(listElement);
            listing.push(element)
        }
        display(num);
        lastPage.textContent = parseInt(listing.length/25);
        middle.textContent = parseInt((listing.length/25)/2);
        previousTab.textContent = Number(middle.textContent) - 1;
        nextTab.textContent = Number(middle.textContent) + 1;
    })
}


function display(page) {
    for (let index = (page - 25); index < page; index++) {
        const element = listing[index];
        let listElement = document.createElement('li');
        listElement.textContent = element;
        listCard.appendChild(listElement);
    }
}



allCards();

document.getElementById('cards-list').addEventListener('click', (event) => {
    name = event.target.textContent;
    console.log(name);
    getCard(name);
})

function getCard(name) {
    const url = 'https://api.scryfall.com/cards/named?exact=' + name;
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // console.log(data);
        addInfo(data);
    })
}

function addInfo(data) {
    const card = document.querySelector('.card');
    const img = card.querySelector('img');
    const artist = card.querySelector('.subtitle')
    const name = card.querySelector('.title')
    const content = card.querySelector('.content p')
    const subContent = card.querySelector('.message-body')
    const background = card.querySelector('.card-image')

    img.src = data.image_uris.normal;
    artist.textContent = '@'+data.artist;
    name.textContent = data.name;
    content.textContent = data.oracle_text;
    subContent.textContent = data.flavor_text;
}

function next() {
    listCard.innerHTML = "";
    num = num + 25;
    console.log('num est à : ' + num);
    console.log('page est à : ' + num/25);
    display(num);
    
    if ((num * 25) > 419) {
        let page = {};
        page.textContent = 419;
        getPage(page)
    }
}

function previous() {
    if (num > 25) {
        listCard.innerHTML = "";
        num = num - 25;
        console.log('num est à : ' + num);
        console.log('page est à : ' + num/25);
        display(num)
    }

}

function getPage(numPage) {
    
    console.log("Page demandé : " + parseInt(numPage.textContent));
    listCard.innerHTML = "";

    num = parseInt(numPage.textContent)*25
    console.log('num est à : ' + num);
    console.log('page est à : ' + num/25);
    display(num)

    middle.textContent = (num/25);
    previousTab.textContent = Number(middle.textContent) - 1;
    nextTab.textContent = Number(middle.textContent) + 1;

    // const middle = document.querySelector('#middle').textContent = parseInt((listing.length/25)/2);
    // const previous = document.querySelector('#previous').textContent = two - 1;
    // const next = document.querySelector('#next').textContent = two + 1;
}


