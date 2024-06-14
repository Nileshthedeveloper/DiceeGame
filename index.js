var randomNumber= Math.floor(Math.random() *6 )+1;
var randomDiceSource= "images/dice"+ randomNumber+ ".png";
var image1= document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource);


 var randomNumber2 =  Math.floor(Math.random() *6 )+1;
 var randomDiceSource2 = "images/"+"dice"+randomNumber2+".png";
 var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

 if(randomNumber> randomNumber2){
    document.querySelector("h1").innerHTML= " 🚩player 1 wins ";
 }
 else if(randomNumber< randomNumber2){
    document.querySelector("h1").innerHTML= "player 2 wins 🚩";
 }
 else{
    document.querySelector("h1").innerHTML= "it's a draw!";
 }