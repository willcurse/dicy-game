
//for first dice
var random=Math.floor(Math.random()*6)+1;
var randomImg="dice"+ random + ".png";
var rand= "images/" +randomImg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rand);

//for second dice
var random2=Math.floor(Math.random()*6)+1;
var randomImg2="images/dice"+random2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if(random>random2){
    document.querySelector("h1").innerHTML="Balle!🤘-Balle!🤘 P1ayer1 jeetgya😁";
}
else if(random2>random){
    document.querySelector("h1").innerHTML="oee GURU!🤩 Player2 Tussi jeetgy🎉 ";
}
else{
    document.querySelector("h1").innerHTML="are yaar!🙄 DRAW-hogya😪";
}