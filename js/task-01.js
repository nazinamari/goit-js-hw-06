// const categoriesListItems = document.querySelectorAll('li.item');
const categoriesListItems = Array.from(document.querySelectorAll('li.item'));

const countCategories = categoriesListItems.length;

console.log(`Number of categories: ${countCategories}`);

categoriesListItems.forEach(element => {
    const titleItem = element.querySelector('h2').textContent;
    const countListItemElements = element.querySelectorAll('li').length;
    console.log(`${titleItem}\n${countListItemElements}`);
});

