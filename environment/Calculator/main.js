const displayEl = document.getElementById('display');
const numbersEl = document.querySelectorAll('.number');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.allclear');


numbersEl.forEach(number => {
  number.addEventListener('click', () => {
  let content = number.getAttribute('onclick');
    displayEl.innerText += content ;
  })
});

clearEl.addEventListener('click', () => {
  displayEl.innerText = '' ;
});

equalEl.addEventListener('click', () => {
  let expression = displayEl.innerText;
  displayEl.innerText = eval(expression);
});