const images = ["i1.jpg", "i2.jpg", "i3.jpg", "i4.jpg", "i5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backGround = document.querySelector(".back-ground");

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

backGround.style.backgroundImage = `url("img/${chosenImage}")`;
