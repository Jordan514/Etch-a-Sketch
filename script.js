let container = document.querySelector("#container");
createEtch(16);
function createEtch(gridSize){
  for(let i = 0;i<gridSize;i++){
    let square = document.createElement("div");
    square.classList.add("coloum");
    for(let i = 0;i<gridSize;i++){
      let square2 = document.createElement("div");
      square2.classList.add("row");
      square2.addEventListener("mouseover", () => {
        square2.style.backgroundColor = "black";
      })
      square.appendChild(square2);
    }
    container.appendChild(square);
  }
}

let button = document.querySelector("button");
button.addEventListener("click", ()=> {
  let number = prompt("Grid Size?");
  if(number>100){
    alert('This number is too big')
  } else {
  container.innerHTML = "";
  createEtch(number);
  }
})