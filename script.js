function mostrarHora() {
    var fecha = new Date(); // Obtener la fecha actual
    var horas = fecha.getHours(); // Obtener las horas
    var minutos = fecha.getMinutes(); // Obtener los minutos
    var segundos = fecha.getSeconds(); // Obtener los segundos

    // Asegurarse de que los números tengan dos dígitos
    if (horas < 10) {
    horas = '0' + horas;
    }
    if (minutos < 10) {
    minutos = '0' + minutos;
    }
    if (segundos < 10) {
    segundos = '0' + segundos;
    }

    // Mostrar la hora en el elemento con el id "reloj"
    document.getElementById('reloj').innerHTML = horas + ':' + minutos + ':' + segundos;
}

  // Actualizar el reloj cada segundo
setInterval(mostrarHora, 1000);


var timerInterval;
var startTime;
var running = false;
var elapsedTime = 0;

function startStop() {
if (running) {
    running = false;
    clearInterval(timerInterval);
} else {
    running = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}
}

function updateTime() {
var currentTime = Date.now();
elapsedTime = currentTime - startTime;
var formattedTime = formatTime(elapsedTime);
document.querySelector('.time').textContent = formattedTime;
}

function reset() {
running = false;
clearInterval(timerInterval);
elapsedTime = 0;
document.querySelector('.time').textContent = '00:00:00';
}

function formatTime(time) {
var milliseconds = Math.floor((time % 1000) / 10);
var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / (1000 * 60)) % 60);
  var hours = Math.floor((time / (1000 * 60 * 60)) % 24);

return (
    ('0' + hours).slice(-2) +
    ':' +
    ('0' + minutes).slice(-2) +
    ':' +
    ('0' + seconds).slice(-2) +
    '.' +
    ('0' + milliseconds).slice(-2)
);
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);
