var random = Math.floor(Math.random()*6) + 1;
console.log(random);
var randomimange = " images/dice" + random + ".png" ;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , randomimange);
var random2 = Math.floor(Math.random()*6) + 1;
console.log(random2);

var randomimange2 = " images/dice" + random2 + ".png" ;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimange2);

if (random > random2)
{
    document.querySelector("h1").innerHTML = "🔥 player1 wins";

}

if (random2 > random)
{
    document.querySelector("h1").innerHTML = "player2 wins 🔥";

}

if (random == random2)
{
    document.querySelector("h1").innerHTML = "its a tie";

}


