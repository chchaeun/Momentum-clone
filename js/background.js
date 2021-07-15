const images = [
    "0.jpg", "1.jpg", "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `C:/Users/82104/Desktop/Momentum-clone/img/${chosenImage}`;

document.body.appendChild(bgImage);