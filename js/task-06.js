const inputElementForm = document.querySelector("#validation-input");

console.log(inputElementForm);

console.log(Number(inputElementForm.dataset.length));

inputElementForm.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  console.log(event.currentTarget.value.length);

  if (
    event.currentTarget.value.length === Number(inputElementForm.dataset.length)
  ) {
    inputElementForm.classList.remove("invalid");
    inputElementForm.classList.add("valid");
  } else {
    inputElementForm.classList.remove("valid");
    inputElementForm.classList.add("invalid");
  }
}

// ! когда ввожу 6 символов, поле формы становится зеленым, а если 7 символо - красным. НО!!! когда удаляю

// ! как назвать колбек функцию если все предыдущие функции низываются по принципу onSubjectEvent? onInputElementFormInput???
