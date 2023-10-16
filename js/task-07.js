const inputEl = document.querySelector('#font-size-control');
const inputSpanEl = document.querySelector('#text');

const onInputChange = evt => {
    const fontSize = evt.currentTarget.value + 'px';
    inputSpanEl.style.fontSize = fontSize;
};

inputEl.addEventListener('input', onInputChange);