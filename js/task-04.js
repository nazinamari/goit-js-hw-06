let counterValue = 0;

const value = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);