export class Login {

    constructor(){}

/////////////////////////////////////////////////////
//                LOGIN USUARIOS                   //
/////////////////////////////////////////////////////
static loginUsuario (username, password) {

    /* primero verifico que no sea el admin del sistema */ 
    if ( username === "admin" && password === "1234") {

        sessionStorage.setItem("usuarioActivo", "admin");                  
        window.location.href = "admin.html"; 
        return true;

        } else {
            
                let cliente = JSON.parse(localStorage.getItem('DB')).filter(DB => (DB.usuario === username && DB.password === password));

                if (cliente != 0){

                        console.log(cliente);
                        sessionStorage.setItem("usuarioActivo", username); 
                        window.location.href = "panel_clientes.html"; 
                        return true;

                        } else {

                            console.log("Usuario no existente");
                            let mensaje_error = document.getElementById('form_error');                        
                            mensaje_error.innerHTML = `
                            <div class="alert alert-danger" role="alert">
                            Algunos de los datos fue mal ingresado
                            </div>                    
                            `;
                            return false;
                            
                        }            

                }

}










    
}