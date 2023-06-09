const categoriesList = document.querySelector ('ul#categories');
const items  = categoriesList.querySelectorAll ('li.item');
console.log (`Number of categories : ${items.length}`);

items.forEach((item) => {
    const titleElem = item.querySelector('h2').textContent;
    const itemsQty = item.querySelectorAll('li');
    console.log(`Category: ${titleElem}`);
    console.log(`Elements: ${itemsQty.length}`);
});