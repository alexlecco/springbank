import '../css/style.css';
import { Login } from './Login';




/* evento click en boton login de usuarios*/ 

let boton_form_login = document.getElementById('boton_form_login');
boton_form_login.addEventListener("click", function (event) { 

    event.preventDefault();

    let var_login_user = document.querySelector("#var_login_user").value;
    let var_login_password = document.querySelector("#var_login_password").value;


    Login.loginUsuario(var_login_user, var_login_password);

            /*
            if ( Login.loginUsuario(var_login_user, var_login_password) ) {

                window.location.href = "admin.html";

                } else {

                    window.location.href = "index.html";
                    
                    }*/

});
