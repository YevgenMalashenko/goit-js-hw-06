const inputElementForm = document.querySelector("#validation-input");

console.log(inputElementForm);

console.log(Number(inputElementForm.dataset.length));

inputElementForm.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  console.log(event.currentTarget.value.length);

  if (
    event.currentTarget.value.length === Number(inputElementForm.dataset.length)
  ) {
    if (inputElementForm.classList.contains("invalid")) {
      inputElementForm.classList.remove("invalid");
    }
    inputElementForm.classList.add("valid");
  } else {
    if (inputElementForm.classList.contains("valid")) {
      inputElementForm.classList.remove("valid");
    }
    inputElementForm.classList.add("invalid");
  }
}

// ! как назвать колбек функцию если все предыдущие функции низываются по принципу onSubjectEvent? onInputElementFormInput???
