const controlsContainer = document.querySelector('#controls');
const input = document.querySelector('#controls > input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');
// Функція, яка створює вказану к-ть елементів
const createBoxes = amount => {
  // Массив для зберігання елементів для наступного додавання в розмітку однією операцією
  const boxes = [];

  // Початкові розміри елементу
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i++) {
    // Створює елемент
    const box = document.createElement('div');


    boxes.push(box);

    width += 10;
    height += 10;
  }
  