# Practica1QuizMaster-JUEGO-

## 📌 Descripción

**QuizMaster** es una aplicación web de preguntas y respuestas desarrollada como proyecto de **Desarrollo Web en Entorno Cliente**.

El jugador introduce su nombre y comienza una partida de preguntas de tipo trivia. Las preguntas y respuestas se cargan desde un archivo **JSON** y se muestran de forma aleatoria.

El juego está dividido en **2 rondas**, con **2 preguntas por ronda**, haciendo un total de **4 preguntas**.

---

## 🎯 Funcionamiento

El juego funciona de la siguiente manera:

1. El jugador introduce su nombre.
2. Pulsa el botón **"Iniciar Juego"**.
3. Se accede a la pantalla del juego.
4. Se cargan las preguntas desde `preguntas.json`.
5. Se seleccionan **2 preguntas aleatorias**.
6. Las respuestas de cada pregunta se mezclan aleatoriamente.
7. El jugador selecciona una respuesta para cada pregunta.
8. Pulsa **"Comprobar respuestas"**.
9. Las respuestas se comprueban y los botones quedan bloqueados.
10. Se muestran otras **2 preguntas** para la segunda ronda.
11. El jugador responde a las nuevas preguntas.
12. Finalmente se muestran los resultados de la partida.

---

## 🕹️ Características

* 👤 Introducción del nombre del jugador.
* ❓ Preguntas cargadas desde un archivo JSON.
* 🎲 Selección aleatoria de preguntas.
* 🔀 Respuestas mezcladas aleatoriamente.
* 🚫 Evita repetir preguntas.
* ✅ Contador de respuestas correctas.
* ❌ Contador de respuestas incorrectas.
* 🔒 Bloqueo de respuestas después de comprobarlas.
* 🔄 Sistema de 2 rondas.
* 📊 Pantalla final con los resultados.
* 💜 Diseño visual personalizado.

---

## 📁 Estructura del proyecto

```text
Practica1
│
├── index.html
├── juego.html
├── resultado.html
│
├── css
│   └── style.css
│
├── js
│   ├── inicio.js
│   ├── juego.js
│   └── resultadoJuego.js
│
├── json
│   └── preguntas.json
│
└── imagenes
    └── logo1.png
```

---

## 💻 Tecnologías utilizadas

* **HTML5** — estructura de las páginas.
* **CSS3** — diseño y estilos.
* **JavaScript** — funcionamiento y lógica del juego.
* **JSON** — almacenamiento de preguntas y respuestas.
* **Git** — control de versiones.
* **GitHub** — almacenamiento y gestión del proyecto.

---

## 🧩 Archivos principales

### `index.html`

Es la página inicial del juego.

Permite al jugador introducir su nombre y comenzar la partida.

### `juego.html`

Es la pantalla principal del juego.

Aquí se muestran las preguntas, las respuestas, el nombre del jugador y las rondas.

### `resultado.html`

Muestra el resultado final de la partida, incluyendo las respuestas correctas e incorrectas.

### `inicio.js`

Controla el inicio de la partida y recoge el nombre introducido por el jugador.

### `juego.js`

Contiene la lógica principal del juego:

* Carga de preguntas.
* Selección aleatoria.
* Mezcla de respuestas.
* Selección de respuestas.
* Comprobación de respuestas.
* Control de rondas.
* Contador de aciertos y errores.

### `resultadoJuego.js`

Se encarga de recoger los resultados enviados desde el juego y mostrarlos en la pantalla final.

### `preguntas.json`

Contiene las preguntas, las posibles respuestas y la respuesta correcta.

---

## 🎮 Sistema de rondas

El juego está dividido en dos rondas:

### Ronda 1

Se muestran 2 preguntas:

```text
Pregunta 1
Pregunta 2
```

Después de responderlas y pulsar **"Comprobar respuestas"**, las respuestas quedan bloqueadas.

### Ronda 2

Se muestran otras 2 preguntas:

```text
Pregunta 3
Pregunta 4
```

El botón cambia a:

```text
Comprobar y Finalizar
```

Después de comprobarlas, el jugador pasa a la pantalla de resultados.

---

## 📊 Resultados

Al finalizar la partida se muestran:

* 👤 Nombre del jugador.
* ✅ Número de respuestas correctas.
* ❌ Número de respuestas incorrectas.

Los datos se envían a la página de resultados mediante parámetros en la URL.

Ejemplo:

```text
resultado.html?nombre=Patricia&correctas=3&incorrectas=1
```

---

## 👩‍💻 Autora

**Patricia Bausan Gómez**

Proyecto realizado para el ciclo de **Desarrollo de Aplicaciones Web (DAW)**.

---

## 📚 Proyecto académico

Este proyecto ha sido desarrollado como práctica de **Desarrollo Web en Entorno Cliente** utilizando HTML, CSS, JavaScript y JSON.
