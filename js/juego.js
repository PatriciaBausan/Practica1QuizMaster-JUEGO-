const preguntasJuego = document.getElementById("preguntas");
const botonComprobar = document.getElementById("btnComprobar");
const rondaTexto = document.getElementById("ronda");
let nombreJugador = document.getElementById("nombreJugador");

let parametros = new URLSearchParams(window.location.search);

nombreJugador.textContent = parametros.get("nombre");

let preguntas = [];
let preguntasRonda = [];
let preguntasUsadas = [];

let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

let ronda = 1;


function cargarPreguntas() {

    fetch("json/preguntas.json")
        .then(function(respuesta) {
            return respuesta.json();

        })
        .then(function(datos) {
            preguntas = datos;
            elegirPreguntas();
            mostrarPreguntas();
            console.log("preguntas y respuestas cargadas correctamente");

        })
        .catch(function(error) {
            console.log(error);

        });
}


function elegirPreguntas() {

    preguntasRonda = [];

    while (preguntasRonda.length < 2) {
        let numeroAleatorio = Math.floor(Math.random() * preguntas.length);

        if (!preguntasUsadas.includes(numeroAleatorio)) {
            preguntasRonda.push(preguntas[numeroAleatorio]);
            preguntasUsadas.push(numeroAleatorio);
        }
    }
}

function mezclarRespuestas(respuestas) {

    respuestas.sort(function() {
        return Math.random() - 0.5;
    });

}


function mostrarPreguntas() {

    for (let i = 0; i < preguntasRonda.length; i++) {
        let pregunta = preguntasRonda[i];
        mezclarRespuestas(pregunta.respuestas);

        preguntasJuego.innerHTML += `
            <div class="tarjeta-pregunta nueva">
                <p>PREGUNTA</p>
                <h2>${pregunta.pregunta}</h2>
                <div class="respuestas">
                    <button class="respuesta">
                        ${pregunta.respuestas[0]}
                    </button>
                    <button class="respuesta">
                        ${pregunta.respuestas[1]}
                    </button>
                    <button class="respuesta">
                        ${pregunta.respuestas[2]}
                    </button>
                    <button class="respuesta">
                        ${pregunta.respuestas[3]}
                    </button>
                </div>
            </div>
        `;
    }

    activarRespuestas();
}


function activarRespuestas() {

    let botonesRespuesta = document.querySelectorAll(".respuesta");
    for (let i = 0; i < botonesRespuesta.length; i++) {
        botonesRespuesta[i].onclick = function() {
            let tarjeta = botonesRespuesta[i].parentElement;
            let botonesPregunta = tarjeta.querySelectorAll(".respuesta");
            for (let j = 0; j < botonesPregunta.length; j++) {
                botonesPregunta[j].classList.remove("seleccionada");
            }
            botonesRespuesta[i].classList.add("seleccionada");
        };
    }
}

function comprobarRespuestas() {
    let tarjetas = document.querySelectorAll(".tarjeta-pregunta");
    let ultimasTarjetas = [
        tarjetas[tarjetas.length - 2],
        tarjetas[tarjetas.length - 1]
    ];

    let respuestasSeleccionadas = 0;

    for (let i = 0; i < ultimasTarjetas.length; i++) {
        let respuesta = ultimasTarjetas[i].querySelector(".seleccionada");
        if (respuesta != null) {
            respuestasSeleccionadas++;
        }
    }

    if (respuestasSeleccionadas < 2) {
        alert("Tienes que marcar una respuesta en cada pregunta");
        return;
    }

    for (let i = 0; i < ultimasTarjetas.length; i++) {
        let respuestaSeleccionada =
            ultimasTarjetas[i].querySelector(".seleccionada");
        let respuestaJugador =
            respuestaSeleccionada.textContent.trim();
        let respuestaCorrecta =
            preguntasRonda[i].correcta;

        if (respuestaJugador == respuestaCorrecta) {
            respuestasCorrectas++;

        } else {
            respuestasIncorrectas++;
        }
    }

    for (let i = 0; i < ultimasTarjetas.length; i++) {
        let botones = ultimasTarjetas[i].querySelectorAll(".respuesta");
        for (let j = 0; j < botones.length; j++) {
            botones[j].disabled = true;
        }
    }


    if (ronda == 1) {
        elegirPreguntas();
        mostrarPreguntas();
        ronda = 2;

        rondaTexto.textContent = "Ronda 2 de 2";
        botonComprobar.textContent = "Comprobar y Finalizar";

    } else {

        let nombre = parametros.get("nombre");

        window.location.href =
            "resultado.html?nombre=" + nombre +
            "&correctas=" + respuestasCorrectas +
            "&incorrectas=" + respuestasIncorrectas;
    }
}

cargarPreguntas();

botonComprobar.onclick = comprobarRespuestas;