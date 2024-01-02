document.addEventListener("DOMContentLoaded", function () {
  let divMaster = document.querySelector("#container");

  for (let y = 0; y < 16; y++) {
    // Cria uma div para cada linha
    let row = document.createElement("div");
    row.className = "row";

    for (let x = 0; x < 16; x++) {
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
    }
    // Adiciona a linha ao container mestre
    divMaster.append(row);
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

  let blah = document.querySelectorAll(".blah");
  for (let i = 0; i < blah.length; i++) {
    blah[i].onclick = function (e) {
      {
        e.target.style.backgroundColor = background();
      }
    };
  }
});
