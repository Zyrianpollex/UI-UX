const counterInput = document.getElementById('counter');
let bagCounter = 0;
let quantityCounter = 1;

function minus() {
  if (quantityCounter <= 1) return;
  quantityCounter -= 1;
  counterInput.value = quantityCounter;
}

function plus() {
  if (quantityCounter >= 1000) return;
  quantityCounter += 1;
  counterInput.value = quantityCounter;
}

document.getElementById('counter').onchange = () => {
  value = counterInput.value;
  return value < 1 || value > 1000 || !(value > 0 && value <= 1000)
    ? (counterInput.value = quantityCounter)
    : (quantityCounter = parseInt(value, 10));
};

document.getElementById('addToBagBtn').onclick = () => {
  bagCounter += quantityCounter;
  document.getElementById('bagCounter').innerHTML = bagCounter;
};
