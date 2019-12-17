if (sessionStorage.getItem('usuarioActivo') === null) {
  window.location.href = "index.html";
}

var usuarioActivo = sessionStorage.getItem('usuarioActivo');

console.log ("probando desde panel clientes " + usuarioActivo);

let saludo_cliente_panel = document.getElementById('saludo_cliente_panel');

saludo_cliente_panel.innerHTML = `
<div class="alert alert-success mt-3" role="alert">
  Bienvenido  <b>${usuarioActivo}</b> a tu panel de Cliente. Desde aqui puedes gestionar tu cuenta. 
</div>
`;




var boton_solicitar_prestamo = document.getElementById('boton_solicitar_prestamo');
boton_solicitar_prestamo.addEventListener("click", function (event) {
  
  alert(' Estas por pedir un prestamo personal ');
  
});


var boton_solicitar_tarjeta = document.getElementById('boton_solicitar_tarjeta');
boton_solicitar_tarjeta.addEventListener("click", function (event) {
  
  alert(' Estas por pedir una tarjeta ');
  
});


var boton_solicitar_cuentacorriente = document.getElementById('boton_solicitar_cuentacorriente');
boton_solicitar_cuentacorriente.addEventListener("click", function (event) {
  
  alert(' Estas por pedir una cuenta corriente ');
  
});




