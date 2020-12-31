const cursor = document.querySelector('.ball');
const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(cursor, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
}

// Hover an element
function onMouseHover(e) {
  TweenMax.to(cursor, .3, {
    scale: 3
  })
}
function onMouseHoverOut(e) {
  TweenMax.to(cursor, .3, {
    scale: 1
  })
}