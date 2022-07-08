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
  input: document.querySelector('#controls input'),
  btnCreate: document.querySelector('#controls button[data-create]'),
  btnDestroy: document.querySelector('#controls button[data-destroy]'),
  container: document.querySelector('#boxes'),
};

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

const createBoxes = () => {
  refs.container.textContent = "";
  const count = Number(refs.input.value);
  const items = [];
  for (let i = 0; i < count; i += 1) {
    const div = document.createElement('div');
    div.style.background = getRandomHexColor();
    div.style.width = i * 10 + 20 + "px";
    div.style.height = i * 10 + 20 + "px";

    items.push(div);
  }

  refs.container.append(...items);
}


refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', deleteBoxes);

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

function deleteBoxes() {
  refs.container.textContent = '';
  refs.inputRef.value = '';
  amount = 0;
}

boxes.style.display = "flex";
boxes.style.listStyle = "none";
boxes.style.flexWrap = "wrap"


