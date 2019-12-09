import { clientes } from './clientes';

export class registration {



    constructor(){}

/////////////////////////////////////////////////////
//             REGISTRACION USUARIOS               //
/////////////////////////////////////////////////////
static registracionUsuario (var_login_user, var_login_password, var_login_nombre, var_login_apellido, var_login_email) {



if ( clientes.verificadorUsuariosRegistrados(var_login_user, var_login_email) ) {
        let mensaje_error = document.getElementById('form_error_registration');                        
        mensaje_error.innerHTML = `
        <div class="alert alert-danger" role="alert">
        El usuario o el mail ya estan en nuestro sistema!!!
        </div>                    
        `;
 } 

    if ( JSON.parse(localStorage.getItem("DB")) ) {
    var clients = JSON.parse(localStorage.getItem("DB"))
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
        tipousuario: 0
        });


    //sobrescribo la variable DB del localstorage con los datos de clients
    localStorage.setItem("DB", JSON.stringify(clients));

    document.getElementById("formularioRegistracion").hidden = true; 

    let mensaje_exito_registration = document.getElementById('mensaje_exito_registration');                        
    mensaje_exito_registration.innerHTML = `
    <div class="alert alert-success" role="alert">
    <h2>Registracion Exitosa</h2>
    Muchas gracias por registrarte. Pronto recibirá un mail confirmando su registración efectiva.<br>
    Recuerde que un administrador de nuestro sistema de aprobar su registración.
    </div>                    
    `;
    return true;
}    


















}  