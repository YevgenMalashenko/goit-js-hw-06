const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ! Option No.1
const ingredientsToAdd = ingredients.map((elem) => `<li>${elem}</li>`).join("");

const listEl = document.querySelector("#ingredients");

listEl.insertAdjacentHTML("beforeend", ingredientsToAdd);

// ! Option No.2

// const listEl = document.querySelector("#ingredients");

// ingredients.forEach((el) => {
//   const liItem = document.createElement("li");
//   liItem.textContent = el;
//   liItem.classList.add("item");
//   listEl.prepend(liItem);
// });
