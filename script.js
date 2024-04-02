let gridSize = 100;
let container = document.querySelector("#container");
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