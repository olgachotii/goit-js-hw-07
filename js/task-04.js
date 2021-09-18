const spanEl = document.querySelector('#value');
const buttonIncrementEl = document.querySelector('[ data-action="increment"]');
const buttonDecrementEl = document.querySelector('[ data-action="decrement"]');

let counterValue = Number(spanEl.textContent);

buttonDecrementEl.addEventListener('click', decrement);
buttonIncrementEl.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
