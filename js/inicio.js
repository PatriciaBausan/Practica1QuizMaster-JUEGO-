const boton = document.getElementById("btnIniciar");

function iniciarJuego() {

    let nombre = document.getElementById("nombre").value;

    if (nombre == "") {

        alert("Por favor, introduce tu nombre");

    } else {

        window.location.href = "juego.html?nombre=" + nombre;

    }
}

boton.onclick = iniciarJuego;