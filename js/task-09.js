// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// todo Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change -
//   color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

const bodyRef = document.querySelector('body');

const btnEl = document.querySelector('.change-color');

const hexText = document.querySelector('.color');

btnEl.addEventListener("click", onhexColor);

function onhexColor() {
  const hexColor = getRandomHexColor();
  bodyRef.style.backgroundColor = hexColor;
  hexText.textContent = hexColor;
  console.log(hexColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

