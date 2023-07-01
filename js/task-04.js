const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById('value');


let counterValue = 0;


const decrement = () => {
  counterValue--;
  valueSpan.textContent = counterValue;
};


const increment = () => {
  counterValue++;
  valueSpan.textContent = counterValue;
};


decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);