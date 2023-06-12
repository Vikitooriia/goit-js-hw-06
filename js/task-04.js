const decrementBtn  = document.querySelector ('[data-action="decrement"]');
const incrementBtn = document.querySelector ('[data-action="increment"]');
const valueSpan = document.querySelector ('#value');

let counterValue  = 0;

incrementButton.addEventListener('click', function() {
        counterValue++;
        valueSpan.textContent = counterValue;
      });
  
decrementButton.addEventListener('click', function() {
        counterValue--;
        valueSpan.textContent = counterValue;
      });