
const box = document.querySelector("#boxes")


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

function createBlocks() {
  removeBlocks ()
  const blocks = [];
  const inputBlocks= document.querySelector("input[type='number']");
  const inputValue = inputBlocks.value
  let width =30;
  let height = 30
  if (inputValue>=1 && inputValue<=100) {
    for (let i =1; i <= inputValue; i++) {
      const block = createBlock (width,height ); 
      blocks.push(block);
      width +=10;
      height +=10
    }
  }
  document.querySelector("#boxes").append(...blocks)
  inputBlocks.value ="";
}

function removeBlocks () {
  box.innerHTML =""
}

document.querySelector("button[data-create]").addEventListener("click",createBlocks)
document.querySelector("button[data-destroy]").addEventListener("click",removeBlocks)