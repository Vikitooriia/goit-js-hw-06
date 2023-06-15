const decrementBtn  = document.querySelector ('[data-action="decrement"]');
const incrementBtn = document.querySelector ('[data-action="increment"]');
const valueSpan = document.querySelector ('#value');

let counterValue  = 0;

incrementBtn.addEventListener('click', function() {
        counterValue++;
        valueSpan.textContent = counterValue;
      });
  
decrementBtn.addEventListener('click', function() {
        counterValue--;
        valueSpan.textContent = counterValue;
      });