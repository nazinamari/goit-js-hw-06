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
  inputRef: document.querySelector('#controls > input'),
  btnCreateRef: document.querySelector('#controls button[data-create]'),
  btnDestroyRef: document.querySelector('#controls button[data-destroy]'),
  divRef: document.querySelector('#boxes'),
};

//* Слухачі подій

refs.inputRef.addEventListener('click', onInput);
refs.btnCreateRef.addEventListener('click', () => createBoxes(amount));
refs.btnDestroyRef.addEventListener('click', deleteBoxes);

let amount = 0;

// function onInput(event) {
//   amount = Number(event.currentTarget.value);
// }

function onInput() {
  if(refs.inputRef.value <= 100){
      const valueInput = refs.inputRef.value
      createBoxes(valueInput)
  } else {
    alert('Не більше 100 елементів')
    }
}

let size = {
  width: 30,
  height: 30,
}
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//* Функція створення розмітки

function createBoxes(amount) {
  for (let i = 1; amount >= i; i++){
    let newDivEl = document.createElement('div')
    newDivEl.setAttribute('id', 'boxes')
    newDivEl.style.width = size.width + 'px';
    newDivEl.style.height = size.height + 'px';
    newDivEl.style.backgroundColor = getRandomHexColor()
    refs.divRef.append(newDivEl)
    size.width += 10;
    size.height += 10;
  }
}

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

function deleteBoxes() {
  refs.divRef.innerHTML = "";
  refs.inputRef.value = 0;
  amount = 0;
}

boxes.style.display = "flex";
boxes.style.listStyle = "none";
boxes.style.flexWrap = "wrap"


