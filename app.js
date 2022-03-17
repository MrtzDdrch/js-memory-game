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

const resultDisplay = document.querySelector('#result');

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
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('checking for match');

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        console.log('Match found');

        cards[optionOneId].setAttribute('src', 'images/solved.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].setAttribute('src', 'images/solved.jpg');        
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    }
    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "All doggos found!";
    }
}

createBoard();