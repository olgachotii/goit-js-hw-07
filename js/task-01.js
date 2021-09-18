const categoriesItemEl = document.querySelectorAll('.item');

console.log(`В списке ${categoriesItemEl.length} категории.`);

const iterateCategory = categories => {
  return categories.forEach(category => {
    const titleText = category.querySelector('h2').textContent;
    const numberOfItems = category.querySelector('ul').children.length;
    console.log(`Текст заголовка: ${titleText}`);
    console.log(`Kоличество элементов в категории: ${numberOfItems}`);
  });
};

iterateCategory(categoriesItemEl);
