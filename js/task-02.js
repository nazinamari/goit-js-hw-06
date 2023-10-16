const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsList = document.querySelector('#ingredients');

const array = ingredients.map(element => {
  const ItemEl = document.createElement('li');
  ItemEl.textContent = element;
  ItemEl.classList.add('list-item');
  return ItemEl;
});

ingridientsList.append(...array);

console.log(ingridientsList);