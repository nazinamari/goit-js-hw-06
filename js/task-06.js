const inputEl = document.querySelector('#validation-input');

const onInputChange = (evt) => {
    const { value } = evt.currentTarget;
    const { length } = inputEl.dataset;
    const isValid = value.length === Number(length);
    
    inputEl.classList.toggle('valid', isValid);
    inputEl.classList.toggle('invalid', !isValid);
}

inputEl.addEventListener('blur', onInputChange);

// const onInputChange = (evt) => {
//     if (evt.currentTarget.value.length === Number(inputEl.dataset.length)) {
//         inputEl.classList.add('valid');
//         inputEl.classList.remove('invalid');
//     } else {
//         inputEl.classList.add('invalid');
//         inputEl.classList.remove('valid');
//     }
// }