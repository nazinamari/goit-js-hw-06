// todo  Напиши скрипт, который реагирует на изменение значения 

// input#font - size - control(событие input) и изменяет инлайн - 
// стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputText = document.querySelector('#text');
console.log(inputText);

const inputElRange = document.querySelector('#font-size-control');
console.log(inputElRange);

inputElRange.addEventListener('input', (event) => {
    inputText.style.fontSize = event.currentTarget.value + 'px';
});