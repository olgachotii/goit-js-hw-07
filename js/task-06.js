const inputEl = document.querySelector('#validation-input');

console.dir(inputEl.dataset.length);

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput() {
  inputEl.classList.add('invalid');
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.replace('invalid', 'valid');
  } else {
    inputEl.classList.replace('valid', 'invalid');
  }
}
