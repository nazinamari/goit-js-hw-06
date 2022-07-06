// todo Напиши скрипт создания и очистки коллекции элементов. 

// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

// * Отримання рандомного кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//* Посилання на елементи

const refs = {
  inputRef: document.querySelector('input'),
  btnCreateRef: document.querySelector('button[data-create]'),
  btnDestroyRef: document.querySelector('button[data-destroy]'),
  divRef: document.querySelector('#boxes'),
};

//* Слухачі подій

refs.inputRef.addEventListener('click', onInput);
refs.btnCreateRef.addEventListener('click', () => createBoxes(amount));
refs.btnDestroyRef.addEventListener('click', destroyBoxes);

let amount = 0;

function onInput(event) {
  amount = Number(event.currentTarget.value);
}

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//* Функція створення розмітки

function createBoxes(amount) {
  let emptyBox = [];
  for (let i = 1; i <= amount; i += 1){
    const newDivEl = document.createElement('div');
    newDivEl.style.height = `${i * 10 + 30}px`;
    newDivEl.style.width = `${i * 10 + 30}px`;
    newDivEl.style.background = `${getRandomHexColor()}`;
    emptyBox.push(newDivEl);
  }
  refs.divRef.append(...emptyBox);
}

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

function destroyBoxes() {
  refs.divRef.innerHTML = "";
  refs.inputRef.value = 0;
  amount = 0;
}

boxes.style.display = "flex";
boxes.style.listStyle = "none";
boxes.style.flexWrap = "wrap"
