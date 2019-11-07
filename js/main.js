
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

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You Win!");
	} else {
		alert("Sorry, try again!");
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
  	if(cardsInPlay.length === 2){
  		checkForMatch();
  	}else{
  		flipCard();
  	}

};


var createBoard = function(){
	var message = document.createElement('h1');
	message.setAttribute('id', 'msg');
	document.getElementById('game-board').appendChild(message);

	for(var i = 0; i < cards.length; i += 1){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement);
	}

}

createBoard();

