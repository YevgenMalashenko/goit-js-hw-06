const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ! Option No.1
// const ingredientsToAdd = ingredients.map((elem) => `<li>${elem}</li>`).join("");

// const listEl = document.querySelector("#ingredients");

// listEl.insertAdjacentHTML("beforeend", ingredientsToAdd);

// ! Option No.2

// const list = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const liEl = ingredients[i];
//   // console.log(liEl);

//   const liItemEl = document.createElement("li");
//   liItemEl.classList = "list__item";
//   liItemEl.textContent = liEl;

//   list.push(liItemEl);
//   // console.log(liItemEl);
// }
// console.log(list);

// const listEl = document.querySelector("#ingredients");

// listEl.append(...list);

// ! Option No.3

// const listEl = document.querySelector("#ingredients");

// ingredients.forEach((el) => {
//   const liItem = document.createElement("li");
//   liItem.textContent = el;
//   liItem.classList.add("item");
//   listEl.prepend(liItem);
// });

// ! Option No.4

// ? Все коллекции в JS делаются именно так:

const listEl = document.querySelector("#ingredients");

const makeListOfIngredients = (ingredientsList) => {
  return ingredientsList.map((ingredient) => {
    const listItemEl = document.createElement("li");
    const listItemTextEl = document.createElement("p");
    listItemEl.classList.add("list__item");
    listItemTextEl.classList.add("list__text");
    listItemTextEl.textContent = ingredient;
    listItemEl.append(listItemTextEl);

    console.log(listItemEl);
    return listItemEl;
  });
};

const ingredientsToAdd = makeListOfIngredients(ingredients);

listEl.append(...ingredientsToAdd);
