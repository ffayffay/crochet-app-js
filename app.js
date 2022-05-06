const upBtn = document.getElementById('up-btn');
const dwnBtn = document.getElementById('dwn-btn');
let count = 0;
let e = event || window.event;

function updateCount(event) {
  if(event.target.id === 'up-btn') {
    count++
  } else {
    count--
  }
  console.log(count)
}