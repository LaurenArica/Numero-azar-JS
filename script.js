let numeroAzar = generarNumeroAleatorio();
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let botonComprobar = document.querySelector('button');
let botonReiniciar = document.getElementById('reiniciar');
let intentosMostrados = document.getElementById('intentos'); 

let intentos = 0;
const maxIntentos = 10;

numeroEntrada.addEventListener('click', function () {
    mensaje.textContent = '';
    mensaje.style.color = '';
});

function generarNumeroAleatorio() {
    numero = Math.floor(Math.random() * 100) + 1;
    return numero
}

function mostrarNumeroIntentos() {
    intentosMostrados.textContent = `Intentos: ${intentos} de ${maxIntentos}.`;
}

function chequearResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        mensaje.style.color = 'red';
        return;
    }

    intentos++;
    mostrarNumeroIntentos();

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = `¡Felicidades! ¡Has adivinado el número correcto en el intento ${intentos}!`;
        mensaje.classList.add('green-message');
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        botonComprobar.style.display = 'none';
        botonReiniciar.style.backgroundColor = 'red';
        botonReiniciar.style.display = 'inline';
    } else if (intentos >= maxIntentos) {
        mensaje.textContent = `¡Agotaste tus ${maxIntentos} intentos! El número era ${numeroAzar}.`;
        mensaje.style.color = 'red';
        numeroEntrada.disabled = true;
        botonComprobar.style.display = 'none';
        botonReiniciar.style.backgroundColor = 'red';
        botonReiniciar.style.display = 'inline';
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = `El número es mayor.`;
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = `El número es menor.`;
        mensaje.style.color = 'red';
    }
}

function reiniciarJuego() {
    numeroAzar = generarNumeroAleatorio();
    intentos = 0;
    mostrarNumeroIntentos();
    mensaje.textContent = '';
    mensaje.style.color = '';
    numeroEntrada.value = '';
    numeroEntrada.disabled = false;
    botonComprobar.style.display = 'inline'; 
    botonReiniciar.style.display = 'none'; 
}