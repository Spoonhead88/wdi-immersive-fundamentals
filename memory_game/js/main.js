
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var shuffleOption = document.getElementById('shuffle');
var instructionsOption = document.getElementById('instructions');
var InstroSection = document.querySelector('section');
var endMsg = document.querySelector('h3');

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element... at random
    randomIndex = Math.floor(Math.random() * currentIndex); // chooses random index
    currentIndex -= 1; //once a random index is chosen, -1  count until they have all been swapped

    // And swap it with the current element. 
    temporaryValue = array[currentIndex]; // temporary value stores the value that is about to be swapped
    array[currentIndex] = array[randomIndex]; // this line swaps the value at currentindex with the one that was chosen at random
    array[randomIndex] = temporaryValue; // this line puts the original value at currentdiex into the random index
  }

  return array;
}

function createBoard(){
	for(i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function clearBoard(){
	for(i = 0; i < cards.length; i++){
		var image = document.querySelector('#game-board > img');
		image.parentNode.removeChild(image);
	}
}

function reset(){
	//clear the array and then reset
	for(i = cardsInPlay.length; i > 0; i--){
		cardsInPlay.pop();
	}
	clearBoard();
	shuffle(cards);
	createBoard();
}

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1])
		{
			endMsg.textContent = "You Won!";
			endMsg.classList.toggle("visible");
			console.log('should have won');
			console.log(endMsg.textContent);
		}
		else
		{
			endMsg.textContent = "Wrong! Shuffle to try again.";
			endMsg.classList.toggle("visible");
			console.log('should have lost');
		}
}

function flipCard(){
	cardId = this.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src',cards[cardId].cardImage);

	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}
}

function toggleVisible(){
	InstroSection.classList.toggle("visible");
}

shuffleOption.addEventListener('click', reset);
instructionsOption.addEventListener('click', toggleVisible);

shuffle(cards);
createBoard();