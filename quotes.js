window.onload = init;

function init() {
  document.getElementById("text").innerText =
    "Click en el boton para generar frase";
  document.getElementById("author").innerText = "Y un autor";
}

const QUOTANK = [
  {
    quote:
      "Vivimos entrenando para hacer dinero o estudiando cosas que a veces ni siquiera queremos, esculpiendo nuestros cuerpos pa' estar buenas y buenos pues sabemos que pa' ver corazones todos son ciegos",
    author: "Canserbero",
  },
  {
    quote: "Solemos enfocarnos en cosas que no nos dan verdadera felicidad",
    author: "Canserbero",
  },
  {
    quote: "La vida es un viaje, no una estacion",
    author: "Canserbero",
  },
  {
    quote:
      "Si alguien conoce el numero del mas alla hagamelo saber para pdoer llamar a quien no esta",
    author: "Canserbero",
  },
  {
    quote:
      "Estare alli cuando llores y cuando rias, en tus dias de melancolia y en tus alegrias",
    author: "Nach",
  },
  {
    quote:
      "Solo hay una vida y un sentido para darle, y no pienso esperar al tiempo, porque el nunca se paro a esperarme",
    author: "Nach",
  },
  {
    quote:
      "La capacidad de resolver un conflicto sin lucha es lo que distingue al prudente del ignorante",
    author: "Apache",
  },
];

function generateQuote() {
  randomIndex = Math.floor(Math.random() * QUOTANK.length);

  document.getElementById("text").innerText = QUOTANK[randomIndex].quote;
  document.getElementById("author").innerText = QUOTANK[randomIndex].author;
}
