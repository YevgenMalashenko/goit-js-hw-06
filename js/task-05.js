const refs = {
  textInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", onInputInput);

function onInputInput(event) {
  refs.output.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    refs.output.textContent = "Anonymous";
  }
}

// ! при перезагрузке страницы не очищается поле инпута....
