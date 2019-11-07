
console.log("probably works");
var cards = [
{
	rank: "queen",
	suit: "heart",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{	
	rank: "king",
	suit: "heart",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]
const cardsInPlay = [];

function checkForMatch() {
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You Win!");
	} else {
		alert("Sorry, try again!");
	}
	}
function flipcard (){
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}
function createBoard (){
	for (var i = 0; i <cards.length; i++) {
	
		cardElement.setAttribute('src', images/back.png);	
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipcard());
		document.getElementById("game-Board").appendChild(cardElement);
	}
}

createBoard();
}
