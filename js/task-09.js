function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonElement = document.querySelector(".change-color");

const colorNameEl = document.querySelector(".color");
console.log(colorNameEl);

const bodyEl = document.querySelector("body");

changeColorButtonElement.addEventListener(
  "click",
  handleChangeColorButtonElement
);

function handleChangeColorButtonElement() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
}
