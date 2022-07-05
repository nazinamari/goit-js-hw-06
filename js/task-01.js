// todo  Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

const countCategories = document.querySelectorAll('li.item').length;
console.log(`Number of categories: ${countCategories}`);

console.log(countCategories);

// 2. Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
// и количество элементов в категории(всех вложенных в него < li >).


const CategoriesList = document.querySelectorAll('li.item');
CategoriesList.forEach(element => {
    const h2El = element.querySelector('h2').textContent
    const ulEl = element.querySelectorAll('li')
    console.log(`Category: ${h2El}`)
    console.log(`Elements: ${ulEl.length}`)
})


// todo В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5