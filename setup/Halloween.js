const colors = ["#F75F1C", "#000000", "#FF9A00", "#881EE4", "85E21F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    // get random number between 0 - 4
 const randomNumber = getRandomNumber();
 
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}