const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  container: document.querySelector('#boxes')
}

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const number = Number(refs.input.value);
  const items = [];

  for (let i = 0; i < number; i += 1) {
    const div = document.createElement('div');
    div.style.cssText = `
      background: ${getRandomHexColor()};
      width: ${i * 10 + 20}px;
      height: ${i * 10 + 20}px;
    `;
    items.push(div);
  }
  
  refs.container.innerHTML = '';
  refs.container.append(...items);
}

function destroyBoxes() {
  refs.container.innerHTML = '';
  refs.input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesStyles = {
  display: 'flex',
  listStyle: 'none',
  flexWrap: 'wrap'
};

Object.assign(boxes.style, boxesStyles);