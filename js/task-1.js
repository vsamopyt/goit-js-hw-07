function countCategories() {
  const categories = document.querySelector("#categories");
  console.log("Number of categories:", categories.children.length);
  categories.childNodes.forEach((element) => {
    if (element.firstElementChild !== undefined) {
      console.log("Category:", element.firstElementChild.textContent);
      console.log("Elements:", element.firstElementChild.nextElementSibling.children.length);
    }
  });
}
countCategories();

