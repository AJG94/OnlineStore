

function agregarRegistro(){
    //implementacion
    
    function PersonaR(usuario){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.confirmar_contrasena = confirmar_contrasena;
   
    }
    
    var usuario = document.getElementById("in_nombre_usuario").value;
    var contrasena = document.getElementById("in_contrasena").value;
    var confirmar_contrasena = document.getElementById("in_confirmar_contrasena").value;

    nuevoRegistro = new PersonaR(usuario,contrasena,confirmar_contrasena);
 
    
    console.log(nuevoRegistro);
    agregar();

}
var registros = [];

function agregar(){
    
    registros.push(nuevoRegistro);
    console.log(registros);
    OrdenarArreglo();
}


function OrdenarArreglo(arreglo) {
    //Implementacion
    registros.sort((o1,o2) =>{
        if (o1.usuario < o2.usuario) {
            return -1;
        }else if (o1.usuario > o2.usuario){
            return 1;
        }else{
            return 0;
        }
    });
    console.log(registros);
    return registros;
}


function validar_nombre_usuario(string) {
    var aceptados = /^[A-Za-z]+$/;
    var dato = document.getElementById("in_nombre_usuario").value;
    
    if ((document.getElementById("in_nombre_usuario").value.length >= 6) & (document.getElementById("in_nombre_usuario").value.length <= 30)){
        if(dato.match(aceptados)){
            //window.alert("Nombe correcto")
            

            return true;
            
        }
        else{
            //window.alert("Usuario incorrecto")
            return false;
        }
    }
    else{
        //window.alert("Usuario incorrecto")
        return false;
    }


}

function validar_contrasena(string) {

    var aceptados2 = /^[A-Z0-9]+$/;
    var dato = document.getElementById("in_contrasena").value;
    
    if (document.getElementById("in_contrasena").value.length >= 6){
        if(dato.match(aceptados2)) {   
            //window.alert("Contraseña correcta")
            return true;  
        }
        else{
               // window.alert("contraseña incorrecta")
                return false;
            }
    }
    else{
        //window.alert("contraseña incorrecta");
        return false;
    }


}

function confirmar_contrasenac(stringA, stringB) {

    var aceptados3 = /^[A-Z0-9]+$/;
    var dato = document.getElementById("in_contrasena").value;
    var dato2 = document.getElementById("in_confirmar_contrasena").value;

    if (document.getElementById("in_contrasena").value.length >= 6){
        if(dato.match(aceptados3)) {   
            //window.alert("Contraseña original correcta")
            if (document.getElementById("in_confirmar_contrasena").value.length >= 6){
                if(dato2.match(aceptados3)) {   
                    //window.alert("Contraseña confirmar correcta")
                    if(dato == dato2){
                        
                        //window.alert("Contraseñas iguales")
                        
                        agregarRegistro();
                        return true;
                    }
                    else {
                        //window.alert("Contraeñas no son iguales.")
                    }
                }
                else{
                        //window.alert("contraseña confirmar dato incorrecta")
                        return false;
                    }
            }
            else{
                //window.alert("contraseña confirmar longitud incorrecta");
               // deberia ser false, pero solo sube bien con el True
                return false;
            }
        }
        else{
                //window.alert("contraseña contiene datos incorrecta")
                return false;
            }
    }
    else{
        //window.alert("longitud contraseña incorrecta");
        return false;
    }

}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasenac = confirmar_contrasenac;

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
module.exports.agregar = agregar;
