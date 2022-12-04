const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];





const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const violet = document.querySelector(".violet");

function clickBlue(){
    bgImage.src = "img/0.jpg";
}

blue.addEventListener("click", clickBlue);

function clickPink(){
    bgImage.src = "img/1.jpg";
}

pink.addEventListener("click", clickPink);

function clickYellow(){
    bgImage.src = "img/2.jpg";
}

yellow.addEventListener("click", clickYellow);

function clickRed(){
    bgImage.src = "img/3.jpg";
}

red.addEventListener("click", clickRed);

function clickViolet(){
    bgImage.src = "img/4.jpg";
}

violet.addEventListener("click", clickViolet);

