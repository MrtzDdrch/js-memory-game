const cardArray = [
    {
        name: 'elvis',
        img: 'images/elvis.jpg'
    },
    {
        name: 'ida',
        img: 'images/ida.jpg'
    },
    {
        name: 'oskar',
        img: 'images/oskar.jpg'
    },
    {
        name: 'pentu',
        img: 'images/pentu.jpg'
    },
    {
        name: 'robbe',
        img: 'images/robbe.jpg'
    },
    {
        name: 'wilma',
        img: 'images/wilma.jpg'
    },
    {
        name: 'elvis',
        img: 'images/elvis.jpg'
    },
    {
        name: 'ida',
        img: 'images/ida.jpg'
    },
    {
        name: 'oskar',
        img: 'images/oskar.jpg'
    },
    {
        name: 'pentu',
        img: 'images/pentu.jpg'
    },
    {
        name: 'robbe',
        img: 'images/robbe.jpg'
    },
    {
        name: 'wilma',
        img: 'images/wilma.jpg'
    },
]

// shuffle the cardArray
cardArray.sort(() => 0.5 - Math.random());

// grab the #grid div, remember as gridDisplay
const gridDisplay = document.querySelector('#grid');

// Array for the cards chosen by the player
let cardsChosen = [];

let cardsChosenIds = [];

const cardsWon = [];

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('array-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

function flipCard(){
    let cardId = this.getAttribute('array-id');
    console.log('clicked', cardId, cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen, cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('img');
    console.log('checking for match');
    if (cardsChosen[0] == cardsChosen[1]) {
        console.log('Match found');
        

        cards[cardsChosenIds[0]].setAttribute('src', 'images/solved.jpg');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/solved.jpg');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    cardsChosen = [];
    cardsChosenIds = [];
}





createBoard();