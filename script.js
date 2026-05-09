const images = [

    "img11.jpeg",
    "img13.jpeg",
    "img14.jpeg",
    "img16.jpeg",
    "img12.jpeg"

];

const captions = [

    "Love You Amma ❤️",
    "Thank You For Everything 🌸",
    "My Forever Hero 💖",
    "Best Mom Ever ✨",
    "Happy Mother's Day ❤️"

];

let current = 0;

function startSlideshow(){

    document.getElementById("slideshow")
    .classList.remove("hidden");

    changeSlide();

    setInterval(changeSlide,2500);
}

function changeSlide(){

    document.getElementById("slideImage")
    .src = images[current];

    document.getElementById("caption")
    .innerHTML = captions[current];

    current++;

    if(current >= images.length){

        current = 0;
    }
}