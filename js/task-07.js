const fontSizeControlElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControlElement.addEventListener(
  "input",
  handleFontSizeControlElementInput
);

function handleFontSizeControlElementInput(event) {
  textElement.style.fontSize = `${event.currentTarget.value}px`;
}
