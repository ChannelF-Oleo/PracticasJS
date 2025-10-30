const botonUno = document.getElementById("botonUno");
const parrafoUno = document.getElementById("parrafoUno");
const caja = document.getElementById("caja");
const botonDos = document.getElementById("botonDos");

const botonTres = document.getElementById("botonTres");
const saludo = document.getElementById("saludo");
const opcion = document.getElementById("opcion").value;
const mensaje = document.getElementById("mensaje");
const botonCuatro = document.getElementById("botonCuatro");

botonUno.addEventListener("click", function () {
  alert("¡Has hecho clic en el botón!");
  parrafoUno.textContent = "¡El botón ha sido clickeado!";
});

caja.addEventListener("mouseover", function () {
  caja.style.backgroundColor = "lightblue";
});

caja.addEventListener("mouseout", function () {
  caja.style.backgroundColor = "#740b0b";
});

botonDos.addEventListener("click", function () {
  alert("¡Has hecho clic en el botón agregado desde el script!");
  console.log("¡El botón agregado desde el script ha sido clickeado!");
});

function cambiarColor(elemento) {
  elemento.style.backgroundColor = "green";
}

botonTres.addEventListener("click", function () {
  const nombreUsuario = document.getElementById("nombre").value;
  const opcionSeleccionada = document.getElementById("opcion").value;
  saludo.textContent = "¡Hola, " + nombreUsuario + "!";
});

const nombreUsuario = document.getElementById("nombre").value;

botonCuatro.addEventListener("click", function () {
  const opcionSeleccionada = document.getElementById("opcion").value;
  const nombreUsuario = document.getElementById("nombre").value;
  mensaje.textContent =
    nombreUsuario + ", tu estado civil es " + opcionSeleccionada;
});

function validarEmail() {
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("resultadoEmail");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    mensaje.textContent = "El correo electrónico es válido.";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "El correo electrónico no es válido.";
    mensaje.style.color = "red";
  }
}

const botonCinco = document.getElementById("botonCinco");

botonCinco.addEventListener("click", validarEmail);

const botonSeis = document.getElementById("botonSeis");

botonSeis.addEventListener("click", validarNumeros);

function validarNumeros() {
  const input = document.getElementById("soloNumeros").value;
  const resultado = document.getElementById("resultado");
  const regex = /^[0-9]*$/;
  if (regex.test(input)) {
    resultado.textContent = "El texto es válido. Solo contiene números.";
    resultado.style.color = "green";
  } else {
    resultado.textContent =
      "El texto no es válido. Contiene caracteres no numéricos.";
    resultado.style.color = "red";
  }
}

const botonSiete = document.getElementById("botonSiete");

botonSiete.addEventListener("click", generarNumeroAleatorio);

function generarNumeroAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  const displayNumero = document.getElementById("numeroAleatorio");
  displayNumero.textContent = "Número aleatorio generado: " + numeroAleatorio;
}

const botonOcho = document.getElementById("botonOcho");

botonOcho.addEventListener("click", mostrarFechaHora);

function mostrarFechaHora() {
  const fechaHoraActual = new Date();
  const displayFechaHora = document.getElementById("fechaHora");
  displayFechaHora.textContent =
    "Fecha y hora actual: " + fechaHoraActual.toString();
}

const botonNueve = document.getElementById("botonNueve");

botonNueve.addEventListener("click", iniciarTemporizador);

function iniciarTemporizador() {
  const displayTemporizador = document.getElementById("temporizador");
  setInterval(function () {
    const fechaHoraActual = new Date();
    displayTemporizador.textContent = fechaHoraActual.toLocaleTimeString();
  }, 1000);
  displayTemporizador.classList.add("temporizador");
}

const botonDiez = document.getElementById("botonDiez");
const numeroPrimo = document.getElementById("numeroPrimo").value;

botonDiez.addEventListener("click", verificarPrimo);
function verificarPrimo() {
  const numero = parseInt(document.getElementById("numeroPrimo").value);
  const resultadoPrimo = document.getElementById("resultadoPrimo");
  if (isNaN(numero) || numero < 2) {
    resultadoPrimo.textContent =
      "Por favor, ingresa un número válido mayor o igual a 2.";
    resultadoPrimo.style.color = "red";
    return;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      resultadoPrimo.textContent = numero + " no es un número primo.";
      resultadoPrimo.style.color = "red";
      return;
    }
  }
  resultadoPrimo.textContent = numero + " es un número primo.";
  resultadoPrimo.style.color = "green";
}
const botonOnce = document.getElementById("botonOnce");

botonOnce.addEventListener("click", validarContrasenaSegura);

const contraseña = document.getElementById("contraseña").value;

function validarContrasenaSegura() {
  const contraseña = document.getElementById("contraseña").value;
  const resultadoContrasena = document.getElementById("resultadoContrasena");
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(contraseña)) {
    resultadoContrasena.textContent = "La contraseña es segura.";
    resultadoContrasena.style.color = "green";
  } else {
    resultadoContrasena.textContent =
      "La contraseña no es segura. Debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.";
    resultadoContrasena.style.color = "red";
  }
}

const botonDoce = document.getElementById("botonDoce");
botonDoce.addEventListener("click", eliminarDuplicados);

function eliminarDuplicados() {
  const arrayInput = document.getElementById("arrayInput").value;
  const array = arrayInput.split(",").map((item) => item.trim());
  const arraySinDuplicados = [...new Set(array)];
  const displayArraySinDuplicados =
    document.getElementById("arraySinDuplicados");
  displayArraySinDuplicados.textContent =
    "Array sin duplicados: " + arraySinDuplicados.join(", ");
}

const botonTrece = document.getElementById("botonTrece");
botonTrece.addEventListener("click", iniciarContadorRegresivo);

function iniciarContadorRegresivo() {
  const displayContadorRegresivo = document.getElementById("contadorRegresivo");
  let contador = 10;
  displayContadorRegresivo.textContent = contador;
  const intervalo = setInterval(function () {
    contador--;
    displayContadorRegresivo.textContent = contador;
    if (contador <= 0) {
      clearInterval(intervalo);
      displayContadorRegresivo.textContent = "¡Tiempo terminado!";
    }
  }, 1000);

  displayContadorRegresivo.classList.add("contadorRegresivo");
}

const botonCatorce = document.getElementById("botonCatorce");
botonCatorce.addEventListener("click", convertirATitulo);
function convertirATitulo() {
  const p = document.getElementById("texto");
  if (p) {
    const h2 = document.createElement("h2");
    h2.textContent = p.textContent;
    h2.id = p.id;
    h2.className = p.className;
    Array.from(p.attributes).forEach((attr) => {
      if (attr.name !== "id" && attr.name !== "class")
        h2.setAttribute(attr.name, attr.value);
    });
    p.parentNode.replaceChild(h2, p);
  }
}

const botonQuince = document.getElementById("botonQuince");
botonQuince.addEventListener("click", filtrarMenoresDeEdad);

function filtrarMenoresDeEdad() {
  const dia = parseInt(document.getElementById("dia").value);
  const mes = parseInt(document.getElementById("mes").value) - 1;
  const año = parseInt(document.getElementById("año").value);
  const verificacionEdad = document.getElementById("verificacionEdad");
  const contenido = document.getElementById("contenido");
  const fechaNacimiento = new Date(año, mes, dia);
  const fechaActual = new Date();
  let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  const mesDiferencia = fechaActual.getMonth() - fechaNacimiento.getMonth();
  if (
    mesDiferencia < 0 ||
    (mesDiferencia === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  if (edad >= 18) {
    verificacionEdad.textContent =
      "Eres mayor de edad. Tienes " + edad + " años.";
    verificacionEdad.style.color = "green";
    contenido.innerHTML = "<p>Contenido para mayores de edad: ¡Bienvenido!</p>";
  } else {
    verificacionEdad.textContent =
      "Eres menor de edad. Tienes " + edad + " años.";
    verificacionEdad.style.color = "red";
    contenido.innerHTML = "<p>Contenido restringido para menores de edad.</p>";
  }
}
