document.addEventListener("DOMContentLoaded", function () {
  let sizeButton = document.createElement("button");
  document.body.append(sizeButton);
  sizeButton.textContent = "Adjust size of the grid";
  // sizeButton.style.top = "10px";
  sizeButton.style.position = "absolute";
  sizeButton.style.display = "flex";
  sizeButton.style.justifyContent = "center";
  sizeButton.style.left = "50%";
  sizeButton.style.top = "5%";
  sizeButton.style.justifySelf = "center";
  sizeButton.style.transform = "translateX(-50%)";

  let userInput;

  function gridSize() {
    userInput = prompt("Enter a number of squares per side");
  }
  // sizeButton.addEventListener("click", gridSize);

  let divMaster = document.querySelector("#container");

  function createGrid() {
    for (let y = 0; y < userInput; y++) {
      // Cria uma div para cada linha
      let row = document.createElement("div");
      row.className = "row";

      for (let x = 0; x < userInput; x++) {
        // Cria uma div para cada célula da linha
        let cell = document.createElement("div");
        cell.className = "existing-div blah";
        cell.style.border = "2px solid black";
        cell.style.height = "20px";
        cell.style.width = "20px";
        cell.style.display = "flex";
        cell.style.boxSizing = "border-box";

        // Adiciona a célula à linha
        row.append(cell);
        row.style.display = "flex";
        row.style.justifyContent = "center";

        let blah = document.querySelectorAll(".blah");
        for (let i = 0; i < blah.length; i++) {
          blah[i].onclick = function (e) {
            {
              e.target.style.backgroundColor = background();
            }
          };
        }
      }
      // Adiciona a linha ao container mestre
      divMaster.append(row);
      divMaster.style.marginTop = "10%";
    }
  }
  // let blah = document.querySelectorAll(".blah");
  // blah.forEach(function (item) {
  //   item.onclick = function (e) {
  //     e.target.style.backgroundColor = "grey";
  //   };
  // });

  function random(colors) {
    return Math.floor(Math.random() * colors);
  }

  function background() {
    const colorR =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    return colorR;
  }

  sizeButton.addEventListener("click", function () {
    gridSize();
    createGrid();
  });
});
