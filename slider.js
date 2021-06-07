var slide = new Array("bulbasaur.png", "charmander.png", "squirtle.png");
var position = 0;

function changeSlide(direction) {
    position = position + direction;
    if (position < 0)
        position = slide.length - 1;
    if (position > slide.length - 1)
        position = 0;

    document.getElementById("slide").src = slide[position];
}

setInterval("changeSlide(1)", 4000);