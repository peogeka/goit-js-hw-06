const counterValueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counter = 0

decrementBtn.addEventListener('click', () => {
    counterValueEl.textContent -= 1;
})
incrementBtn.addEventListener('click', () => {
    counterValueEl.textContent = Number(counterValueEl.textContent) + 1;
})