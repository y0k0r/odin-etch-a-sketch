
function createGrid(size) {
  const container = document.querySelector(".container");
  
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

