const cursor = document.querySelector('.ball');
const menu = document.querySelector('.menu');

var clicked = false;
TweenMax.to(cursor, .4, {
    scale: 0,
    x: menu.getBoundingClientRect.top - 15,
    y: menu.getBoundingClientRect.left - 15,

})

// Listeners
menu.addEventListener('click', onClick);

function onClick(e) {
    clicked = !clicked;
    if(clicked) {
        TweenMax.to(cursor, .4, {
            scale: 150
        })
    } else {
        TweenMax.to(cursor, .4, {
            scale: 0
    })
    }
}
