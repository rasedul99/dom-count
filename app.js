let count = 0;
function add() {
  count++;
  counterControl(count);
}

function minus() {
  count--;
  counterControl(count);
}

function counterControl(value) {
  console.log(value);

  document.getElementById("counter").innerText = value;
}
