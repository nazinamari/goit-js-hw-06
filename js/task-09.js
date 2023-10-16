const refs = {
  bodyRef: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
  hexText: document.querySelector('.color')
} 

refs.btnEl.addEventListener('click', onHexColor);

function onHexColor () {
  const hexColor = getRandomHexColor();
  updateBackgroundColor(hexColor);
  updateHexText(hexColor);
}

function updateBackgroundColor(color) {
  refs.bodyRef.style.background = color;
}

function updateHexText(color) {
  refs.hexText.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

