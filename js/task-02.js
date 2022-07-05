const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// todo Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().

// const ingredientsEl = document.createElement('li')
// console.log(ingredientsEl);

// Добавит название ингредиента как его текстовое содержимое.

// ingredientsEl.textContent = "Name";

// Добавит элементу класс item.

// ingredientsEl.classList.add('ingredientsEl')

// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const IngredientsList = document.querySelector('#ingredients');

// IngredientsList.appendChild(ingredientsEl);

// console.log(IngredientsList);


const IngredientsList = document.querySelector('#ingredients');
const array = ingredients.map(element => {
  const newIngredientsEl = document.createElement('li');
  newIngredientsEl.classList.add('ingridient-item');
  newIngredientsEl.textContent = element;
  return newIngredientsEl;
});

IngredientsList.append(...array);

console.log(IngredientsList)


