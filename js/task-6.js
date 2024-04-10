
const box = document.querySelector("#boxes")
const input= document.querySelector("input[type='number']");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBlock (width=30,height=30 ) {
  const block = document.createElement("div");
  block.style.width =  width+"px";
  block.style.height = height+"px";
  block.style.backgroundColor = getRandomHexColor();
  return block
}

function createBoxes(amount) {
  box.innerHTML ="";
  const blocks = [];

  let width =30;
  let height = 30
  if (amount>=1 && amount<=100) {
    for (let i =1; i <= amount; i++) {
      const block = createBlock (width,height ); 
      blocks.push(block);
      width +=10;
      height +=10
    }
  }
  document.querySelector("#boxes").append(...blocks)
  input.value=""
}

function destroyBoxes() {
  box.innerHTML ="";
  input.value ="";
}

document.querySelector("button[data-create]").addEventListener("click", function handle () {
  const amount= input.value;
  createBoxes(amount)})
document.querySelector("button[data-destroy]").addEventListener("click", function handle () {
  destroyBoxes() })