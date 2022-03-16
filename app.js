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

cardArray.sort(() => 0.5 - Math.random());


const gridDisplay = document.querySelector('#grid');

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();


// turn card: read data-id i, find associated image
// needs to listen to 2 clicks. How to do that? 
// if two cards similar, turn white. How to do that? They do not have matching IDs!

function flipCard(){
    let cardId = this.getAttribute('data-id');
    console.log('clicked', cardId, cardArray[cardId].name);
}





