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
    }
    if (bordes.checked) eliminarBordes()
    else agregarBordes()
    
    pintaCuadros();
}

function pintaCuadros() {
    let cuadraditos = Array.from(document.querySelectorAll(".cuadrado"));
    cuadraditos.forEach((cuadradito) => cuadradito.addEventListener("mouseover", function(e) {
        if (bordes.checked) {
            e.toElement.style.backgroundColor = actualColor();
            eliminarBordes();
        } else {
            e.toElement.style.backgroundColor = actualColor();
            agregarBordes();
        }
    }))
}


let bordes = document.querySelector("#bordes")
bordes.addEventListener("change", function() {
    if (this.checked) eliminarBordes()
    else agregarBordes()
}) 


function eliminarBordes() {
    let cuadriculas = Array.from(document.querySelectorAll(".cuadrado"));
    cuadriculas.forEach((cuadro) => cuadro.style.border = "0.666667px solid transparent");
}

function agregarBordes() {
    let cuadriculas = Array.from(document.querySelectorAll(".cuadrado"));
    cuadriculas.forEach((cuadro) => cuadro.style.border = "0.666667px solid rgb(31, 31, 31)");
}

let borrador = document.querySelector("#borrador");
borrador.addEventListener("change", function() {
    if (this.checked) activarBorrador()
    else desactivarBorrador()
})

function activarBorrador() {
    let cuadriculas = Array.from(document.querySelectorAll(".cuadrado"));
    cuadriculas.forEach((cuadricula) => cuadrado.style.backgroundColor = "rgb(47, 47, 47");

}

function desactivarBorrador() {
    let cuadriculas = Array.from(document.querySelectorAll(".cuadrado"));
    cuadriculas.forEach((cuadricula) => cuadrado.style.backgroundColor = "white");

}

function randomColor() {
    randomizer = () => (Math.floor(Math.random() * 256));
    return `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`
}

function checkeadorBotones(id) {
    let boton = document.querySelector(id);
    if (boton.checked) return true
    else return false
}


function actualColor() {
    if (checkeadorBotones("#borrador")) return "rgb(47, 47, 47)"
    else {
    if (checkeadorBotones("#random")) return randomColor()
    else return "white"
    }
}


createGrid(16);

input.addEventListener("input", () => createGrid(input.value));


