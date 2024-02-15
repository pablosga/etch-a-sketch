let input = document.querySelector("input"); 
let mainContainer = document.querySelector("#main-container");

function createGrid(pixelsNumber) {
    let elementsToDelete = document.querySelectorAll(".fila");
    elementsToDelete.forEach((element) => element.remove());
    for (let i = 0; i < pixelsNumber; i++) {
        let nuevaFila = document.createElement("div");
        nuevaFila.setAttribute("class", "fila");
        mainContainer.appendChild(nuevaFila);
        for (let j = 0; j < pixelsNumber; j++) {
            let cuadrado = document.createElement("div");
            cuadrado.setAttribute("class", "cuadrado");
            nuevaFila.appendChild(cuadrado);
        }
    let cuadraditos = Array.from(document.querySelectorAll(".cuadrado"));
    cuadraditos.forEach((cuadradito) => 
    cuadradito.addEventListener("mouseover", (e) => 
    e.toElement.setAttribute("style","background-color: white")))
    }
}

createGrid(16);
input.addEventListener("input", () => createGrid(input.value));



