// alert("hgcx");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomnum=Math.floor(Math.random()*6)+1;

var randim="images/dice"+randomnum+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randim);

if(randomNumber1>randomnum){
    document.querySelector("h1").innerHTML ="player1 wins";

     
}
else if(randomNumber1<randomnum){
    document.querySelector("h1").innerHTML="player2 wins";

}
 else{
    document.querySelector("h1").innerHTML="draw";
 }