const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const defoultSpanValue = spanEl.textContent;
inputEl.addEventListener('input', onKeydown);

function onKeydown(event) {
  if (event.currentTarget.value.length < 1) {
    spanEl.textContent = defoultSpanValue;
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
