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
        let randomColor2 = randomColor();
        square2.style.backgroundColor = randomColor2;
      })
      square.appendChild(square2);
    }
    container.appendChild(square);
  }
}

function randomColor() {
  let color = ''
  let randoNumber = Math.floor(Math.random()*5)
  switch(randoNumber){
    case 0:
      color = "rgb(0, 255, 145)"
      break;
    case 1: 
      color = "orange";
      break;
    case 2: 
      color = "yellow";
      break;
    case 3: 
      color = "green";
      break;
    case 4: 
      color = "blue";
      break;
    case 5: 
      color = "red";
      break;
    default: 
      color = "black";
      break; 
  }
  return color;
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