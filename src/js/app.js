const redColor = document.getElementsByClassName("red");
const imgCard = document.querySelector ("product-card");
const cardbutton = document.getElementById ("button");
const itemtag = document.getElementsByName ("h3");

const blackColor = document.getElementsByClassName("black");

const grayColor = document.getElementsByClassName ("gray");

redColor.addeventlistener ("click"),function (){
imgCard.computedStyleMap.backgroundimage= 'URL ("../../public/img/redcar.jpg")';
cardbutton.stylebackgroundcolor = "red"
itemtag.style.backgroundcolor = "red" };