export class clientes {

    /*constructor(p_props){
        this.persona = p_props;
    }*/



static verificadorUsuariosRegistrados(username, email){
//VERIFICO QUE NO EXISTE UN USUARIO YA REGISTRADO CON EL USUARIO O MAIL INGRESADOS
    if ( JSON.parse(localStorage.getItem("DB")) ) {

        let busqueda = false;
        busqueda = JSON.parse(localStorage.getItem('DB')).filter(DB => (DB.usuario === username || DB.email === email));

            if ( busqueda ) {
                
                console.log ('encontre un valor en la DB');
                return true;            

            } else { 

                return false; 
            }

    } else {
        return false;
    }
}




    
}