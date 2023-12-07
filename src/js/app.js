const redColor = document.getElementsByClassName('red');
const imgCard = document.querySelector ('product-card');
const cardbutton = document.getElementById ('button');
const tagname = document.querySelector ('h3');


redColor.addeventlistener ('click'),function (){
imgCard.computedStyleMap.backgroundimage= 'URL ("../../public/img/redcar.jpg")';
cardbutton.stylebackgroundcolor = 'red'
tagname.style.backgroundcolor = 'red';
};

const blackColor = document.getElementsByClassName('black');
const imgCardblack = document.querySelector ('product-card');
const cardbuttonblack = document.getElementById ('button');
const tagnamblack = document.querySelector ('h3');

blackColor.addeventlistener ('click'),function (){
    imgCard.computedStyleMap.backgroundimage= 'URL ("../../public/img/blackcar.jpg")';
    cardbutton.stylebackgroundcolor = 'black'
    tagname.style.backgroundcolor = 'black';
    };

const grayColor = document.getElementsByClassName ('gray');
grayColor.addeventlistener ('click'),function (){
    imgCard.computedStyleMap.backgroundimage= 'URL ("../../public/img/graycar.jpg")';
    cardbutton.stylebackgroundcolor ='gray'
    tagname.style.backgroundcolor ='gray';
    };