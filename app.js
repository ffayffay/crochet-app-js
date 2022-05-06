let count = 0;

function updateCount(event) {
  if (event.target.id === "up-btn") {
    count++;
  } else {
    count--;
  }
  console.log(count);
}
