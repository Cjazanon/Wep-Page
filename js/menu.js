var botonlis4 = document.getElementById("lisBoton4");
var boton4 = document.getElementById("boton4");

function desplegarBoton4() {
  botonlis4.classList.add("mostrar");
}

function ocultarBoton4() {
  botonlis4.classList.remove("mostrar");
}

boton4.addEventListener("mouseover", desplegarBoton4, true);
boton4.addEventListener("mouseout", ocultarBoton4, true);

//modo responsive

var iconoMenuMobil = document.getElementById("icono_menu"),
  botonCerrar = document.getElementById("icono_cerrar");

var nav = document.getElementById("nav"),
  botonesNav = document.getElementById("ulNav");

function desplegar() {
  nav.classList.add("aNav");
  botonesNav.classList.add("aBotones");
  botonCerrar.classList.remove("none");
}
function cerrar() {
  nav.classList.remove("aNav");
  botonesNav.classList.remove("aBotones");
  botonCerrar.classList.add("none");
}

iconoMenuMobil.addEventListener("click", desplegar, true);
botonCerrar.addEventListener("click", cerrar, true);
