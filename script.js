let input = document.querySelector("input"); 
let mainContainer = document.querySelector("#main-container");

function createGrid(pixelsNumber) {
    for (let i = 0; i < pixelsNumber; i++) {
        let nuevaFila = document.createElement("div");
        nuevaFila.setAttribute("class", "fila");
        mainContainer.appendChild(nuevaFila);
        for (let j = 0; j < pixelsNumber; j++) {
            let cuadrado = document.createElement("div");
            cuadrado.setAttribute("class", "cuadrado");
            nuevaFila.appendChild(cuadrado);
        }
    }


}
input.addEventListener("input", () => console.log(input.value));




createGrid(16)