const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const grayColor = document.getElementsByClassName(".gray");
const imgCard = document.querySelector("product-image");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3");


redColor.addEventListener("click", ()=>{
    imgCard.style.backgroundImage = 'url(././public/img/redcar.jpg)';
    imgCard.alt='Red car';
    cartButton.style.backgroundColor = "red"
    itemTag.style.backgroundColor = "red"
});

 blackColor.addEventListener("click", ()=>{
    imgCard.style.backgroundImage ='url(././public/img/blackcar.jpg)';
    imgCard.alt= 'Black car';
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
});


grayColor.addEventListener("click", ()=>{
    imgCard.style.backgroundImage = 'url(././public/img/graycar.jpg)';
    imgCard.alt='Gray Car';
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundcolor = "gray";
    });

