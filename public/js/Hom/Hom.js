let meno=document.getElementById("meno")
let menu=document.getElementById("menu")
let exit=document.getElementById("exit")

meno.addEventListener("click",function(){
    menu.style.display="block"
})

exit.addEventListener("click",function(){
    menu.style.display="none"
})







const sheet = document.getElementById('sheet');
const handle = document.getElementById('handle');

const vh = window.innerHeight / 100;

const collapsedHeight = 15 * vh; // حالت بسته
const expandedHeight = 35 * vh;  // حالت باز

let startY = 0;
let startHeight = 0;
let dragging = false;

function startDrag(y) {
  dragging = true;
  startY = y;
  startHeight = sheet.offsetHeight;
  sheet.style.transition = 'none';
}

function onMove(y) {
  if (!dragging) return;

  let deltaY = startY - y;
  let newHeight = startHeight + deltaY;

  newHeight = Math.min(expandedHeight, Math.max(collapsedHeight, newHeight));

  sheet.style.height = `${newHeight}px`;
}

function endDrag() {
  if (!dragging) return;
  dragging = false;

  sheet.style.transition = 'height 0.3s ease';

  if (sheet.offsetHeight > (collapsedHeight + expandedHeight) / 2) {
    sheet.style.height = `${expandedHeight}px`;
  } else {
    sheet.style.height = `${collapsedHeight}px`;
  }
}

handle.addEventListener('mousedown', e => startDrag(e.clientY));
window.addEventListener('mousemove', e => onMove(e.clientY));
window.addEventListener('mouseup', endDrag);

handle.addEventListener('touchstart', e => startDrag(e.touches[0].clientY));
window.addEventListener('touchmove', e => {
  if (dragging) {
    onMove(e.touches[0].clientY);
    e.preventDefault();
  }
});
window.addEventListener('touchend', endDrag);

window.addEventListener('resize', () => {
  location.reload();
});
