const QUOTANK = [
  {
    quote:
      "Vivimos entrenando para hacer dinero o estudiando cosas que a veces ni siquiera queremos, esculpiendo nuestros cuerpos pa' estar buenas y buenos pues sabemos que pa' ver corazones todos son ciegos",
    author: "-Canserbero",
  },
  {
    quote: "Solemos enfocarnos en cosas que no nos dan verdadera felicidad",
    author: "-Canserbero",
  },
  {
    quote: "La vida es un viaje, no una estacion",
    author: "-Canserbero",
  },
  {
    quote:
      "Si alguien conoce el numero del mas allá hagamelo saber para poder llamar a quien no está",
    author: "-Canserbero",
  },
  {
    quote:
      "Estare alli cuando llores y cuando rias, en tus dias de melancolia y en tus alegrias",
    author: "-Nach",
  },
  {
    quote:
      "Solo hay una vida y un sentido para darle, y no pienso esperar al tiempo, porque el nunca se paro a esperarme",
    author: " -Nach",
  },
  {
    quote:
      "La capacidad de resolver un conflicto sin lucha es lo que distingue al prudente del ignorante",
    author: " -Apache",
  },
];

window.onload = init;

function init() {
  generateQuote();
}

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * QUOTANK.length);
  let randomQuote = QUOTANK[randomIndex];
  let tweet = "https://twitter.com/intent/tweet?text=";

  let apiQuote = randomQuote.quote.replace("/ /g", "%20");

  tweet += apiQuote;

  let apiAuthor = randomQuote.author.replace("/ /g", "%20");
  tweet += " - " + apiAuthor;

  $(function () {
    $("#tweet-quote").attr("href", tweet);
  });

  $(".quote").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(randomQuote.quote);
  });

  $(".author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $(aut).text(randomQuote.author);
  });
}
