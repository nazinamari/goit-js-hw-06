const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

const onInput = (evt) => {
    const inputValue = evt.currentTarget.value;
    
    outputEl.textContent = inputValue === '' ? "Anonymous" : inputValue;
}

inputEl.addEventListener('input', onInput);