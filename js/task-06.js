const inputElementForm = document.querySelector("#validation-input");

console.log(inputElementForm);

inputElementForm.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.length === 6) {
    inputElementForm.classList.add("valid");
  } else {
    inputElementForm.classList.add("invalid");
  }
}

// ! когда ввожу 6 символов, поле формы становится зеленым, а если 7 символо - красным. НО!!! когда удаляю

// ! как назвать колбек функцию если все предыдущие функции низываются по принципу onSubjectEvent? onInputElementFormInput???
