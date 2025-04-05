
function createGrid(size) {
  const container = document.querySelector(".container");
  
  container.innerHTML = "";

  let rows = size;
  let columns = size;

  for (let i = 0; i < rows; i++ ) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < columns; j++ ) {
      const box = document.createElement("div")
      box.classList.add("box")
      row.appendChild(box);
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
  createGrid(newSize);
})
