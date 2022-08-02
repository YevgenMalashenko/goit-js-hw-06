const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const liItem = document.createElement("li");
  liItem.textContent = el;
  liItem.classList.add("item");
  listEl.prepend(liItem);
});

//!  4. После чего вставит все <li> за одну операцию в список ul#ingredients - не удовлетворяет, так как елементі вставляются не за одну операцию

// const listEl = document.querySelector("#ingredients");

// let liItem;

// ingredients.forEach((el) => {
//   const liItem = document.createElement("li");
//   liItem.textContent = el;
//   liItem.classList.add("item");
// });

// listEl.prepend(liItem);
