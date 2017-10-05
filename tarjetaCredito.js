//Creando funcion principal de programa para verificar tarjeta de credito

function principal(){
  var cardNumber = "";                                                            //Creando variable que almacena el numero de tarjeta de credito
  do{
		cardNumber = prompt("Por favor, ingrese el número de su tarjeta de credito"); //Preguntando al usuario el numero de su tarjeta de credito
		if(cardNumber != ""){                                                         //Si ingresa opcion valida, distinta a espacio vacio continua
        validCreditCard(cardNumber);                                              //Llamando a la funcion isVAlidCard para comprobar la validez del
      } else {
			alert("Ingrese una opción válida");                                         //Retorna un alert que indica al usuario que ingrese una opcion valida
		  }
    } while (cardNumber == "");


//Creando funcion para validar tarjeta de credito
function isValidCard(cardNumber){

  var array = cardNumber.split("");                                               //Variable tipo array que guarde el numero de tarjeta de credito
  var newArray = array.reverse();                                                 //Variable que guarda el array en sentido inverso
    for(var i = 0; i < newArray.lenght; i + 2){                                   //For para recorrer array invertido y buscar las posiciones pares
                                                                                  //Formula para validar tarjeta de credito
    }
  }
  return alert("Tu número de tarjeta es válido");                                 //Devuelve un alert "Tu numero de tarjeta es válido"
                                                                                  //Crear un alert que indique tarjeta no valida
}

}
principal();                                                                      //Llamando funcion principal
