
function createGrid(size) {
  const container = document.querySelector(".container");
  
  let rows = size;
  let columns = size;

  for (let i = 0; i < rows; i++ ) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < columns; j++ ) {
      const boxes = document.createElement("div")
      boxes.classList.add("boxes")
      row.appendChild(boxes);
    }
    container.appendChild(row);
  }
}


createGrid(16);
