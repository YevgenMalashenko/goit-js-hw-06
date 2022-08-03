const loginFormElement = document.querySelector(".login-form");
// console.log(loginFormElement);

const msg = "dlaskfjadjks";
loginFormElement.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  // console.dir(formElements);

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Enter All Fields");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}
