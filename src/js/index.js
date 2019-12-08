import '../css/style.css';
import { Login } from './Login';
import { registration } from './registration';




/* evento click en boton login de usuarios*/ 

let boton_form_login = document.getElementById('boton_form_login');
boton_form_login.addEventListener("click", function (event) { 

    event.preventDefault();

    let var_login_user = document.querySelector("#var_login_user").value;
    let var_login_password = document.querySelector("#var_login_password").value;


    Login.loginUsuario(var_login_user, var_login_password);

});



let boton_registra_usuario = document.getElementById('boton_registra_usuario');
boton_registra_usuario.addEventListener("click", function (event) { 

    event.preventDefault();

    //obtengo los valores de los inputos del formulario de creacion de clientes 
    let var_login_user = document.querySelector("#var_registration_user").value;
    let var_login_password = document.querySelector("#var_registration_password").value;
    let var_login_nombre = document.querySelector("#var_registration_nombre").value;
    let var_login_apellido = document.querySelector("#var_registration_apellido").value;
    let var_login_email = document.querySelector("#var_registration_email").value;


    registration.registracionUsuario(var_login_user, var_login_password, var_login_nombre, var_login_apellido, var_login_email);





});