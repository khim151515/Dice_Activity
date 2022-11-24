
var rndm1 = Math.floor(Math.random() * 6) + 1; 

var rndmDiceImage = "dice" + rndm1 + ".png"; 

var rndmImgSrc = "images/" + rndmDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", rndmImgSrc);


var rndm2 = Math.floor(Math.random() * 6) + 1;

var rndmImgSrc2 = "images/dice" + rndm2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", rndmImgSrc2);


//If player 1 wins
if (rndm1 > rndm2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (rndm2 > rndm1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
