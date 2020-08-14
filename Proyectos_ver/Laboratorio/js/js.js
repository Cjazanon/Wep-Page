function validar(evento) {
evento.preventDefault();

var user = ["gato@correo.com", "perro@correo.com", "tomate@correo.com"];
var password = ["A1234", "B1234", "C1234"];
var person =["Gato", "Perro", "Tomate"];


var eCorreo = document.querySelector("#Correo").value;
var eContraseña = document.querySelector("#Contraseña").value;


for(var i=0;i<=3;i++){


  if (eCorreo=== "" && eContraseña=== "" ){
  idTituloMensaje.textContent ="Porfavor coloque sus datos" ;

}


else if (eContraseña=== ""){
idTituloMensaje.textContent ="Porfavor coloque su contraseña";
}

else if (eCorreo=== ""){
idTituloMensaje.textContent ="Porfavor coloque su correo" ;

}

if (eCorreo===user[i]) {



  if (eContraseña===password[i]) {
idTituloMensaje.textContent = "Bienvenido " + person[i];

}

else {
  idTituloMensaje.textContent = "Contraseña incorrecta";
  idTituloMensaje2.textContent = "Recuperar contraseña";


}

}

}


}
var boton_iniciar_sesion = document.querySelector("#iniciar");
boton_iniciar_sesion.addEventListener("click", validar);
var idTituloMensaje = document.querySelector("#mensaje");
var idTituloMensaje2 = document.querySelector("#recuperar");
