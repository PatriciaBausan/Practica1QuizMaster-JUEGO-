const resultadoNombre = document.getElementById("resultadoNombre");
const resultadoCorrectas = document.getElementById("resultadoCorrectas");
const resultadoIncorrectas = document.getElementById("resultadoIncorrectas");
const resultadoFinal = document.getElementById("resultadoFinal");


let parametros = new URLSearchParams(window.location.search);


let nombre = parametros.get("nombre");
let correctas = parametros.get("correctas");
let incorrectas = parametros.get("incorrectas");


resultadoNombre.textContent = nombre;
resultadoCorrectas.textContent = correctas;
resultadoIncorrectas.textContent = incorrectas;


if (correctas == 4) {

    resultadoFinal.textContent = "¡Has ganado!";

} else {

    resultadoFinal.textContent = "Has perdido";

}