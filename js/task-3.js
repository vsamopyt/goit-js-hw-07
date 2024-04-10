const input = document.querySelector("#name-input");

function showingInput(event) {
  const out = document.querySelector("#name-output");
  out.textContent = "Anonymous";
  if (event.target.value.trim() !== "") {
    out.textContent = event.target.value.trim();
  }
}

input.addEventListener("input", showingInput);
