const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll(".login-form input");

function checkSubmit(event) {
  event.preventDefault();
  const submitObject = {};
  const email = event.target.elements.email;
  const password = event.target.elements.password;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    submitObject[email.name] = email.value.trim();
    submitObject[password.name] = password.value.trim();

    console.log(submitObject);
  }
}

 function resetForm () {
    this.reset()
 }

form.addEventListener("submit", checkSubmit);
form.addEventListener("submit", resetForm);


inputs.forEach(element => {
    element.addEventListener("focus",function placeholder () {
        this.setAttribute("placeholder", "Type area")
    })
})

inputs.forEach(element => {
    element.addEventListener("blur",function placeholder1 () {
        this.removeAttribute("placeholder")
    })
})