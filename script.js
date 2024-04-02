let container = document.querySelector("#container");

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

createEtch(16);

let button = document.querySelector("button");
function clearGrid (){
  container.remove();
}
button.addEventListener("click", ()=> {
  clearGrid();
  
})