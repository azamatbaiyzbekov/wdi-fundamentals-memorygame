var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
},
];

var cardsInPlay = [];

function checkForMatch () {
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}

function flipCard (cardId) {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!"); }
	else { alert("Sorry, try again.");
	console.log ("User flipped" + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	}
	

}

flipCard(0);
flipCard(2);