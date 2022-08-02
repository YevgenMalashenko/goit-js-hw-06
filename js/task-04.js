let counterValue = 0;

const displayCounterValue = document.querySelector("#value");

const decButton = document.querySelector('button[data-action = "decrement"]');
console.log(decButton);

const incButton = document.querySelector('button[data-action = "increment"]');
console.log(incButton);

decButton.addEventListener("click", reduceCounterValue);

function reduceCounterValue() {
  counterValue -= 1;
  displayCounterValue.innerHTML = `${counterValue}`;
}

incButton.addEventListener("click", increaseCounterValue);

function increaseCounterValue() {
  counterValue += 1;
  displayCounterValue.innerHTML = `${counterValue}`;
}
