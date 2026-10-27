// 1. Traer los elementos del HTML
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const caja = document.getElementById("caja");

// 2. Limite maximo de caracteres
const MAXIMO = 250;

// 3. Cada vez que el usuario escribe, se ejecuta esta funcion
mensaje.addEventListener("input", function () {
  let cantidad = mensaje.value.length;

  // Por seguridad: si se pasa del maximo, cortamos el texto
  if (cantidad > MAXIMO) {
    mensaje.value = mensaje.value.slice(0, MAXIMO);
    cantidad = MAXIMO;
  }

  // Mostrar el conteo en vivo
  contador.textContent = cantidad + " / " + MAXIMO;

  // Si llego al limite, borde rojo. Si no, vuelve a negro.
  if (cantidad === MAXIMO) {
    caja.classList.add("limite");
  } else {
    caja.classList.remove("limite");
  }
});
