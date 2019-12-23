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
  
        // tomo el valor del input
        let var_monto_prestamo = document.querySelector("#var_monto_prestamo").value;

        // cargo los valores que tengo en mi localstorage
        clients = JSON.parse(localStorage.getItem("DB"));

        // tomo el valor del usuario activo
        let usuarioActivo = sessionStorage.getItem('usuarioActivo')

        // preparo el array con el pedido de prestamo
        const newProduct = {type: 'prestamo', monto: var_monto_prestamo, id: Math.floor(Math.random() * 100000), estado: 'inactivo' };

        // recorro el array del localstorage para saber la posicion donde esta el usuario
        let key;
        for(let i = 0; i < clients.length-1; i++) {
            if(clients[i].usuario === usuarioActivo) {
                key = i
            }
        }

        // agrego el nuevo producto en la fila del usuario activo
        clients[key].productos.push(newProduct);

        // actualizo el localstorage con los nuevos datos
        localStorage.setItem("DB", JSON.stringify(clients));


        alert(' Estas por pedir un prestamo personal de $' + var_monto_prestamo + sessionStorage.getItem('usuarioActivo') ); 
});


var boton_solicitar_tarjeta = document.getElementById('boton_solicitar_tarjeta');
boton_solicitar_tarjeta.addEventListener("click", function (event) {
  
  alert(' Estas por pedir una tarjeta ');
  
});


var boton_solicitar_cuentacorriente = document.getElementById('boton_solicitar_cuentacorriente');
boton_solicitar_cuentacorriente.addEventListener("click", function (event) {
  
  alert(' Estas por pedir una cuenta corriente ');
  
});




