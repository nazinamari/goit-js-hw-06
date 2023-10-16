const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');

const array = ingredients.map(element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('list-item');
  return itemEl;
});

ingredientsList.append(...array);
