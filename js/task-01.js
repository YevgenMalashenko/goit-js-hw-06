// ! No.1

const itemEl = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${itemEl.length}`);

// ! No.2

const liItem = document.querySelectorAll("#categories .item");

liItem.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent} \n Elements: ${el.lastElementChild.children.length}`
  )
);
