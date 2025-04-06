
function createGrid(size) {
  const container = document.querySelector(".container");
  
  container.innerHTML = "";

  let rows = size;
  let columns = size;
  let boxSize = 960/size;

  for (let i = 0; i < rows; i++ ) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < columns; j++ ) {
      const box = document.createElement("div")
      box.classList.add("box")
      row.appendChild(box);
      box.style.cssText = `height: ${boxSize}px; width: ${boxSize}px;`
      box.addEventListener("mouseenter", () => {
        box.classList.add("active")
      });
    }
    container.appendChild(row);
  }
}


createGrid(16);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let newSize = prompt("Enter grid size");
  if (newSize > 100) {
    alert('Max grid size is 100. Setting grid size to 100...');
    newSize = 100;
    createGrid(100);
  } else {
    createGrid(newSize);
  }
});

/*btn.addEventListener("click", () => {
  let newSize = prompt("Enter grid size");
  if (newSize > 100) {
    const para = document.createElement("p");
    para.innerText = 'Max grid size is 100. Setting grid size to 100...'
    btn.after(para); 
    newSize = 100;
    createGrid(100);
  } else {
    createGrid(newSize);
  }
}*/
