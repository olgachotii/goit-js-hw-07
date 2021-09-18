const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeInput);

function onChangeInput() {
  spanEl.style.fontSize = `${inputEl.value * 2}%`;
}
