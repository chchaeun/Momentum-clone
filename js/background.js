const images = [];

for(let i=0; i<9; i++){
    images.push(`${i}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("background");

bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);
