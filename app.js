const stitchCountH2 = document.getElementById('stitch-count');
let count = 0;

function displayCount() {
  stitchCountH2.innerHTML = count;
}

function updateCount(event) {
  if (event.target.id === "up-btn") {
    count++;
    displayCount()
  } else {
    count--;
    if (count < 0) {
      count = 0;
    }
    displayCount()
  }
  console.log(count);
}

function clearCount() {
  count = 0;
  displayCount()
}
