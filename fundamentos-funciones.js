//Variables
console.log("******* VARIABLES *******")

console.log("***  Var  ***")
var ciudad = "Barcelona"
console.log(ciudad)

console.log("\n***  Let  ***")
let horasTrabajo = 8
horasTrabajo = horasTrabajo - 1
console.log(horasTrabajo)

console.log("\n***  Const  ***")
const limiteEdad = 21;
console.log("Edad máxima permitida:", limiteEdad);



//Strings
console.log("\n-----  Strings  -----")

console.log("***  Métodos  ***")
var saludoAmigo = "    ¡Hola amigo!   "
console.log(`Saludo: ${saludoAmigo}`)
console.log(`Longitud de la cadena: ${saludoAmigo.length}`)
console.log(`Incluye la palabra 'Hola': ${saludoAmigo.includes("Hola")}`)
console.log(`Mayúsculas: ${saludoAmigo.toUpperCase()}`)
console.log(`Minúsculas: ${saludoAmigo.toLowerCase()}`)
console.log(`Sin espacios en blanco: ${saludoAmigo.trim()}`)
console.log(`Reemplazado: ${saludoAmigo.replace("amigo", "compañero")}`)
console.log(`Subcadena: ${saludoAmigo.slice(5, 9)}`)
console.log(`Subcadena (substring): ${saludoAmigo.substring(5, 9)}`)
console.log(`Carácter en la posición 2: ${saludoAmigo.charAt(2)}`)
console.log(`Repetido tres veces: ${saludoAmigo.repeat(3)}`)
console.log(`Palabras: ${saludoAmigo.split(" ")}`)


//Numeros
console.log("\n-----  Numeros  -----")

console.log("***  Orden de Presencia  ***")
var resultadoOperacion2 = (10 - 2) * 5 / 2 + 3
console.log(resultadoOperacion2);

console.log("\n***  Conversión  ***")
var numeroA = 30
var numeroB = "15"
console.log(`La resta es: ${numeroA - -numeroB}`)


//Booleanos
console.log("\n-----  Booleanos  -----")

console.log("***  Operador Ternario  ***")
var edadVisitante = 25
var mensajeVisita = (edadVisitante >= 21) ? "Puede ingresar al bar" : "Acceso restringido"
console.log(mensajeVisita);


//Condicionales
console.log("\n-----  Condicionales  -----")

console.log("***  If  ***")
var temperaturaHabitacion = 18
if (temperaturaHabitacion < 20) {
  console.log("Hace fresco en la habitación.")
} else {
  console.log("La temperatura es confortable.")
}

console.log("\n***  Switch  ***")
var mesActual = 11
var nombreMesActual

switch (mesActual) {
  case 1:
    nombreMesActual = "Enero"
    break
  case 2:
    nombreMesActual = "Febrero"
    break
  case 3:
    nombreMesActual = "Marzo"
    break
  case 4:
    nombreMesActual = "Abril"
    break
  case 5:
    nombreMesActual = "Mayo"
    break
  case 6:
    nombreMesActual = "Junio"
    break
  case 7:
    nombreMesActual = "Julio"
    break
  case 8:
    nombreMesActual = "Agosto"
    break
  case 9:
    nombreMesActual = "Septiembre"
    break
  case 10:
    nombreMesActual = "Octubre"
    break
  case 11:
    nombreMesActual = "Noviembre"
    break
  case 12:
    nombreMesActual = "Diciembre"
    break
  default:
    nombreMesActual = "Mes no válido"
}
console.log("Estamos en el mes de " + nombreMesActual)


//Bucles
console.log("\n-----  Bucles  -----")

console.log("\n***  forEach  ***")
var instrumentos = ['Guitarra', 'Piano', 'Batería']
instrumentos.forEach(function(instrumento) {
  console.log(instrumento)
})

console.log("\n***  forOf  ***")
var bebidas = ['Café', 'Té', 'Jugo']
for (const bebida of bebidas) {
  console.log(bebida)
}

console.log("\n***  forIn  ***")
var numerosArray = [10, 20, 30];
for (const index in numerosArray) {
  console.log(numerosArray[index])
}

console.log("\n***  Map  ***")
var numerosDobles = [2, 4, 6]
var triples = numerosDobles.map(function(numero) {
  return numero * 3
})
console.log(triples);


//Funciones
console.log("\n-----  Funciones -----")

console.log("\n***  Función sin Parámetros  ***")
function desearExito() {
    console.log("¡Buena suerte en tu jornada!");
}
  
desearExito();

console.log("\n***  Función Anónima  ***")
var dividirNumeros = function(a, b) {
    return a / b
}

var resultadoDivisionNumeros = dividirNumeros(9, 3);
console.log("El resultado de la división es:", resultadoDivisionNumeros)

console.log("\n***  Función con Parámetros  ***")
function multiplicacion(a, b) {
    return a * b
}
  
var resultadoMultiplicacion = multiplicacion(8, 3)
console.log("El resultado de la multiplicación es:", resultadoMultiplicacion)

console.log("\n***  Parámetros Default  ***")
function saludarPersona(nombreSaludo = "Invitado", edadSaludo = 18) {
    console.log(`Hola ${nombreSaludo}, tienes ${edadSaludo} años`)
}
  
saludarPersona("Ana", 25)

console.log("\n***  Parámetros Rest  ***")
function sumarNumeros(...valoresNumeros) {
    let resultadoSumaNumeros = 0
  
    for (let valorNumero of valoresNumeros) {
      resultadoSumaNumeros += valorNumero
    }
  
    return resultadoSumaNumeros
}
console.log(sumarNumeros(2, 3, 4))
console.log(sumarNumeros(1, 2, 3, 4, 5))
console.log(sumarNumeros(5))
console.log(sumarNumeros())

console.log("\n***  Función Flecha  ***")
const calcularRaizCuadrada = numero => Math.sqrt(numero);
const resultadoRaizCuadrada = calcularRaizCuadrada(9);
console.log("La raíz cuadrada de 9 es:", resultadoRaizCuadrada)

console.log("\n***  Función con This  ***")
var mascota = {
    nombreMascota: "Max",
    edadMascota: 5,
    presentacion: function() {
      console.log(`Hola, soy ${this.nombreMascota}, y tengo ${this.edadMascota} años`);
    }
}
mascota.presentacion()





