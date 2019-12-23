import { clientes } from './clientes';

//verifico si la sesion de usuario esta activa
if (sessionStorage.getItem('usuarioActivo') === null) {
  window.location.href = "index.html";
}

document.getElementById("tabla_clientes").hidden = true; 

if ( JSON.parse(localStorage.getItem("DB")) ){
document.getElementById("tabla_clientes").hidden = false;  
cargarClientesNoAprobados();
}



/*//////////////////////////////////////////////////////////////////////////////////*/
/*///////////////////////////////////   populacion de tabla de clientes en ADMIN    */
/*//////////////////////////////////////////////////////////////////////////////////*/ 
function cargarClientesNoAprobados () {
let todosLosCliente = JSON.parse(localStorage.getItem("DB"));
var tableData = todosLosCliente.map( cliente => (
  `
    <tr>
      <td>${cliente.nombre} ${cliente.apellido}</td>
      <td>${cliente.usuario}</td>
      <td>${cliente.email}</td>
      <td><button onclick= "${ () => clientes.aprobarcliente(cliente.usuario)}" class="btn btn-primary" >aceptar</button> </td>
    </tr>
  `
)).join('');
var tbody = document.querySelector('#body');
tbody.innerHTML = tableData;
}


/*//////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////////////////////  evento de creacion de clientes de forma manual*/
/*//////////////////////////////////////////////////////////////////////////////////*/ 

//obtengo el Id del boton para crear cliente
var boton_admin_crea_usuario = document.getElementById('boton_admin_crea_usuario');
//capturo el evento click del boton del formulario 
boton_admin_crea_usuario.addEventListener("click", function (event) { 

    event.preventDefault();

    //obtengo los valores de los inputos del formulario de creacion de clientes 
    let var_login_user = document.querySelector("#var_login_user").value;
    let var_login_password = document.querySelector("#var_login_password").value;
    let var_login_nombre = document.querySelector("#var_login_nombre").value;
    let var_login_apellido = document.querySelector("#var_login_apellido").value;
    let var_login_email = document.querySelector("#var_login_email").value;

  

    if ( clientes.verificadorUsuariosRegistrados(var_login_user, var_login_email) ) {
      return alert ('El usuario o el mail ya estan registrados en nuestro sistema');
    } 
    
    
    

    if ( JSON.parse(localStorage.getItem("DB")) ) {
      var clients = JSON.parse(localStorage.getItem("DB"));
    } else {
      var clients = [];
    }
    
    
    // hago un push (inserción) de los datos del nuevo cliente en el arreglo clients
    clients.push({
        usuario: var_login_user,
        email: var_login_email,
        password: var_login_password,
        nombre: var_login_nombre,
        apellido: var_login_apellido,
        activo: false,
        tipousuario: 0,
        productos: []
      });


    //sobrescribo la variable DB del localstorage con los datos de clients
    localStorage.setItem("DB", JSON.stringify(clients));
        
    alert("Se dio de alta el usuario");

    document.querySelector("#var_login_user").value='';
    document.querySelector("#var_login_password").value='';
    document.querySelector("#var_login_nombre").value='';
    document.querySelector("#var_login_apellido").value='';

    //luego de dar de alta el cliente refresco la tabla de usuarios
    cargarClientesNoAprobados();

});



