
// OBJETOS
const persona = {
  nombre: "Ana",
  apellido: "Gómez",
  edad: 25,
  correo: "ana@gmail.com",
  activa: true,
  direccion: {
      ciudad: "Madrid",
      pais: "España",
      calle: "Calle Atocha",
      edificio: "Edificio 10 3:C"
  },
  mejorAmigo: {
      nombre: "Carlos",
      apellido: "Rodríguez",
      edad: 30
  },
  otrosAmigos: ["Laura", "Pablo", "Martín"],
  enviarCorreo() {
      return `Enviar notificación a ${this.otrosAmigos[0]}`;
  }
};

console.log(JSON.stringify(persona));
console.log(persona);

// Desestructuración de Objetos
const { nombre, edad, otrosAmigos, activa } = persona;
console.log(nombre, edad, otrosAmigos, activa);

// Unir Objetos
const nuevaDireccion = {
  ciudad: "Barcelona",
  pais: "España",
  calle: "Calle Diagonal",
  edificio: "Edificio 22 5:B"
};

const todaInformacion = { ...persona, ...nuevaDireccion };
console.log(todaInformacion);




// ARREGLOS
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(numeros.length);
console.log(numeros[0]);
console.log(numeros[9]);

// Métodos de Modificación de Arreglos
numeros.push(110);   // Agrega 110 al final del arreglo.
numeros.unshift(5);   // Agrega 5 al inicio del arreglo.
numeros.pop();        // Elimina el último elemento del arreglo.
numeros.shift();      // Elimina el primer elemento del arreglo.

console.log("Arreglo Modificado:", numeros);

// Método find y map en Arreglos
const encontrado = numeros.find(e => e > 50);
console.log("Encontrado:", encontrado); // Encuentra el primer elemento mayor que 50.

const nuevoDatos = numeros.map(e => e / 2);
console.log("Nuevo Datos (dividido por 2):", nuevoDatos);

// Desestructuración de Arreglos
const [num1, num2, num3, num4, nombres] = numeros;
console.log("Arreglo Desestructurado:", num1, num2, num3, num4, nombres);
