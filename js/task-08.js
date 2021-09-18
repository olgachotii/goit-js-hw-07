const inputEl = document.querySelector('input');
const buttonRenderEl = document.querySelector('[data-action="render"]');
const buttonDestroyEl = document.querySelector('[data-action="destroy"]');
const divBoxesEl = document.querySelector('#boxes');

buttonRenderEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  const arr = [];
  let divWidht = 30;
  let divHeight = 30;

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');

    divEl.style.width = `${divWidht}px`;
    divEl.style.height = `${divHeight}px`;
    divEl.style.backgroundColor = `rgb(${getRandomInt(226)},${getRandomInt(226)},${getRandomInt(
      226,
    )})`;

    arr.push(divEl);
    divWidht += 10;
    divHeight += 10;
  }

  inputEl.value = '';
  divBoxesEl.append(...arr);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
