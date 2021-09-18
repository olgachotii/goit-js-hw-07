const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const creatListItems = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const itemsEl = creatListItems(ingredients);

const listEl = document.querySelector('#ingredients');

listEl.append(...itemsEl);
