
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "imaages/queen-of-hearts.png"
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

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1])
		{
			console.log("You found a match. ");
		}
		else
		{
			console.log("Sorry try again. ");
		}
}

function flipCard(cardID){

	console.log("User flipped " + cards[cardID].rank);

	cardsInPlay.push(cards[cardID].rank);

	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);