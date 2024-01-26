const images = ["url(b.jpeg", "url(e.jpeg)", "url(Himalayan-chocolate-point.webp)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
 
btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
 
    document.body.style.backgroundImage = images[randomNumber];
    color.textContent = images[randomNumber];
});
 
function getRandomNumber() {
    return Math.floor(Math.random() * images.length);
}
 
