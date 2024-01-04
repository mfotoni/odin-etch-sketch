document.addEventListener("DOMContentLoaded", function () {
  let sizeButton = document.createElement("button");
  document.body.append(sizeButton);
  sizeButton.textContent = "Adjust size of the grid";
  sizeButton.style.position = "absolute";
  sizeButton.style.display = "flex";
  sizeButton.style.justifyContent = "center";
  sizeButton.style.left = "50%";
  sizeButton.style.top = "5%";
  sizeButton.style.justifySelf = "center";
  sizeButton.style.transform = "translateX(-50%)";

  let backgroundClassicButton = document.createElement("button");
  backgroundClassicButton.textContent = "Classic mode";
  document.body.append(backgroundClassicButton);
  backgroundClassicButton.style.position = "absolute";
  backgroundClassicButton.style.top = "5%";

  let backgroundRainbowButton = document.createElement("button");
  backgroundRainbowButton.textContent = "Rainbow mode";
  backgroundRainbowButton.style.position = "absolute";
  backgroundRainbowButton.style.top = "10%";
  document.body.append(backgroundRainbowButton);

  let userInput = 16;
  let divMaster = document.querySelector("#container");
  divMaster.style.width = "960px";
  divMaster.style.height = "960px";
  divMaster.style.margin = "0 auto";

  function gridSize() {
    userInput = prompt("Enter a number of squares per side");
  }
  // sizeButton.addEventListener("click", gridSize);

  function createGrid() {
    divMaster.innerHTML = "";

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
        cell.style.alignItems = "stretch";

        // Adiciona a célula à linha
        row.append(cell);
        row.style.display = "flex";
        row.style.justifyContent = "center";
      }
      // Adiciona a linha ao container mestre
      divMaster.append(row);
      divMaster.style.marginTop = "6%";
    }

    let blah = document.querySelectorAll(".blah");

    blah.forEach(function (item) {
      item.onclick = function (e) {
        e.target.style.backgroundColor = backgroundRainbow();
      };
    });
  }

  function backgroundClassic() {
    let blah = document.querySelectorAll(".blah");
    blah.forEach(function (item) {
      item.onclick = function (e) {
        e.target.style.backgroundColor = "grey";
      };
    });
  }

  //Call the function to create the create grid when the page is load for the first time
  createGrid();

  function random(colors) {
    return Math.floor(Math.random() * colors);
  }

  function backgroundRainbow() {
    const colorR =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    return colorR;
  }

  sizeButton.addEventListener("click", function () {
    gridSize();
    createGrid();
  });
  backgroundClassicButton.addEventListener("click", backgroundClassic);
});
