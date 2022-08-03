const refs = {
  textInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", onInputInput);

function onInputInput(event) {
  if (event.currentTarget.value === "") {
    refs.output.textContent = "Anonymous";
  }
  refs.output.textContent = event.currentTarget.value;
}

// ! при перезагрузке страницы не очищается поле инпута....
