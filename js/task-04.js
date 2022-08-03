let counterValue = 0;

const displayCounterValue = document.querySelector("#value");

const decButton = document.querySelector('button[data-action = "decrement"]');
console.log(decButton);

const incButton = document.querySelector('button[data-action = "increment"]');
console.log(incButton);

decButton.addEventListener("click", reduceCounterValue);

incButton.addEventListener("click", increaseCounterValue);

function reduceCounterValue() {
  counterValue -= 1;
  displayCounterValue.textContent = counterValue;
}

function increaseCounterValue() {
  counterValue += 1;
  displayCounterValue.textContent = counterValue;
}
