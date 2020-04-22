var randomNumber1= Math.floor(Math.random()*6+1);
var imageName1;

if(randomNumber1 ===1){
imageName1= "images/dice1.png";
}else if(randomNumber1 ===2){
imageName1= "images/dice2.png";
}else if(randomNumber1 ===3){
imageName1= "images/dice3.png";
}else if(randomNumber1 ===4){
imageName1= "images/dice4.png";
}else if(randomNumber1 ===5){
imageName1= "images/dice5.png";
}else if(randomNumber1 ===6){
imageName1= "images/dice6.png";
}
imageName1;

document.querySelectorAll("img")[0].setAttribute("src",imageName1);

var randomNumber2= Math.floor(Math.random()*6+1);
var imageName2;
if(randomNumber2 ===1){
imageName2= "images/dice1.png";
}else if(randomNumber2 ===2){
imageName2= "images/dice2.png";
}else if(randomNumber2 ===3){
imageName2= "images/dice3.png";
}else if(randomNumber2 ===4){
imageName2= "images/dice4.png";
}else if(randomNumber2 ===5){
imageName2= "images/dice5.png";
}else if(randomNumber2 ===6){
imageName2= "images/dice6.png";
}
imageName2;

document.querySelectorAll("img")[1].setAttribute("src",imageName2);
var h1String;
if(randomNumber1>randomNumber2){
 h1String= "🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
 h1String= "Player 2 Wins!🚩";
}else if(randomNumber1===randomNumber2){
 h1String= "Draw!";
}

document.querySelector("h1").textContent =h1String;
