//
	/* Escribe tú código aquí */
  function tooptip(classe) {
    var mensaje= document.getElementsByClassName(classe);
    var span= document.createElement("span");

    switch (mensaje) {
      case "name-container input-box": span.innerHTML= "Debe ingresar su nombre.";
                                      mensaje.appendChild(span);
        break;
      case "lastname-container input-box": span.innerHTML= "Debe ingresar su apellido.";
                                            mensaje.appendChild(span);
        break;
      case "email-container input-box": span.innerHTML= "Verifique su email.";
                                        mensaje.appendChild(span);
        break;
      case "password-container input-box": span.innerHTML= "La contraseña debe tener al menos 6 caracteres."
                                          mensaje.appendChild(span);
        break;
      case "form-group input-box": span.innerHTML= "Debes seleccionar al menos un tipo de bici.";

        break;

      default: return false;
    }
  }

  // validacion para letras
  var validacionLetras =function (e){
      var TeclaCodigo=e.keyCode;
      if((TeclaCodigo>=65 && TeclaCodigo<=90)||(TeclaCodigo>=97 && TeclaCodigo<=122)||TeclaCodigo==32||TeclaCodigo==39){
        return true;
      } else {
        return false;
      }
  }

  //validacion de contraseña
  var validacionPassword=function(e){
    if(this.value.trim().length >= 6 && this.value.trim().length <= 30){
      return true;
    }else{
      return false;
    }
  }

  //validacion para correo
  var  validacionEmail = function ( correo ) {
    var correo = this.value;
    var  correoExpr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if( correoExpr.test(correo)!==correo)
      {
        return false;
      }
  }

  // validacion de imputs vacios
  var input= document.getElementsByClassName("form-control")
  function errorVacio(e){
    if(this.value.trim().length==0){
    this.value="";
    document.getElementsByClassName(e);
    tooptip(e);
      }
      else{
          var correcto = this.value.split(" ");
          var datoMayuscula= "";
          for(var a =0; a<correcto.length;a++){
          datoMayuscula += correcto[a].charAt(0).toUpperCase() + correcto[a].substring(1).toLowerCase() + " ";
          }
           this.value = datoMayuscula;
        }
      }



    for(var i in input){
       input[i].onblur=errorVacio;
   }
function validateForm(){
  var nombre= document.getElementById("name");
  nombre.onkeypress=validacionLetras;
  var apellido= document.getElementById("lastname");
  apellido.onkeypress=validacionLetras;
  var email= document.getElementById("input-email");
   email.onkeypress=validacionEmail;
  var password= document.getElementById("input-password");
  password.onkeypress=validacionPassword;

}
