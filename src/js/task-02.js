const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul#ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach ((ingredients) => {
  const newItem  = document.createElement();
  newItem.textContent = ingredients;
  newItem.classList.add('item');
  fragment.appendChild(newItem);
})


