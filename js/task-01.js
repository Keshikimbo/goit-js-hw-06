const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);

itemEl.forEach(element => {
  const titleText = element.firstElementChild.textContent;
  const categoriesQuantity = element.lastElementChild.children.length;

  return console.log(
    `Категория: ${titleText}, количество элементов: ${categoriesQuantity};`,
  );
});