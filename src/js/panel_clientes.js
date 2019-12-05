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