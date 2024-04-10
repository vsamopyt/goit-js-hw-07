function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function setColor() {
  const body = document.querySelector("body");
  const outBlock = document.querySelector(".color");
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  outBlock.textContent = randomColor;
}

document.querySelector(".change-color").addEventListener("click", setColor);
