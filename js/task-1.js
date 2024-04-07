function countCategories() {
  const categories = document.querySelector("#categories");
  console.log("Number of categories:", categories.children.length);
  categories.childNodes.forEach((element) => {
    if (element.firstElementChild !== undefined) {
      console.log(element.firstElementChild.textContent);
      console.log(element.firstElementChild.nextElementSibling.children.length);
    }
  });
}
countCategories();
