// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

  { text: "OHHHH", time: 3 },
  { text: "I", time: 7 },
  { text: "i just woke up from a dream", time: 10 },
  { text: "where you and i had to say goodbye", time: 13 },
  { text: "and i don´t know what it all means", time: 29 },
  { text: "but since i survived,i realized", time: 23 },
  { text: "Wherever you go, that's where I'll follow", time: 27.5 },
  { text: "Nobody's promised tomorrow", time: 32.5 },
  { text: "So I'ma love you every night like it's the last night", time: 37 },
  { text: "Like it's the last night", time: 40.5 },
  { text: "If the world was ending, I'd wanna be next to you", time: 44.5 },
  { text: "If the party was over and our time on Earth was through", time: 53.5 },
  { text: "I'd wanna hold you just for a while and die with a smile", time: 62.5 },
  { text: "If the world was ending, I'd wanna be next to you", time: 72 },
  { text: "Ooh lost", time: 84.5 },
  { text: "lost in the words that we scream", time: 88.5 },
  { text: "I don't even wanna do this anymore", time: 92.5 },
  { text: "'Cause you already know what you mean to me", time: 95.5 },
  { text: "And our love's the only war worth fighting for", time: 100.5 },
  { text: "Wherever you go, that's where I'll follow", time: 106.5 },
  { text: "Nobody's promised tomorrow", time: 110.5 },
  { text: "So I'ma love you every night like it's the last night", time: 115.5 },
  { text: "Like it's the last night", time: 119.5 },
  { text: "If the world was ending", time: 121 },
  { text: "I'd wanna be next to you", time: 124.5 },
  { text: "If the party was over and our time on Earth was through", time: 130.5 },
  { text: "I'd wanna hold you just for a while and die with a smile", time: 140 },
  { text: "If the world was ending, I'd wanna be next to you", time: 149.5 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);