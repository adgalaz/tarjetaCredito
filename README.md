
#### Tarjeta de Crédito Valida.

##### El programa revisa la validez de una tarjeta a través del Algoritmo de Luhn.

###### Paso 1. Se pide al usuario que ingrese su número de tarjeta de crédito. Si el usuario ingresa la información requerida sin espacios u otros caracteres se continua. Si ingresa algún carácter invalido se le vuelve a pedir que ingrese su número de tarjeta.

###### Paso 2. Se guarda el numero en una variable y se pasa estos números a un array en orden inverso.

###### Paso 3. Función isValidCard. Se aplica operación a los números en posiciones pares de acuerdo al algoritmo de Luhn. Los numero en posiciones par se multiplican por 2 y si el resultado es mayor que 10 se suman los números (por ejemplo: 10 = 1+0 = 1). Luego se guardan los nuevos valores en el array y se suman entre si los elementos en posiciones pares e impares. Si el resultado de esta suma se aplica residuo de 10 y es igual a 0, entonces es una tarjeta valida. De lo contrario el número de tarjeta es invalido.

###### Paso 4. Se retorna un mensaje al usuario con el resultado de la operación, es decir "Su número de tarjeta es válido" o "Su número de tarjeta es invalido”.

##### Diagrama de FLujo
![](http://www.nedgrafica.cl/andrea/validCard-andreaDiaz.png)
