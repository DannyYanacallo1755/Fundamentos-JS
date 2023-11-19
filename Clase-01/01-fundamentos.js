
//Strings

let nombreJuego = "Mario Kart"
let puntosVida = "45 p"
console.log(nombreJuego + " " + puntosVida)



//Mezclar variables y texto
console.log(`${nombreJuego} -- ${puntosVida}`)


//Number
const numeroVidas = 20
const numeroPuntos = "20"
console.log(`Total = ${+numeroPuntos + numeroVidas}`)
console.log(3 + 4 * 5)
console.log(4 * 3 ** 2)

// Boleans

let saldo1 = 500
let saldo2 = 1000

if(saldo1 > saldo2){
    console.log("Pagar")
}
else{
    console.log("Seguir consumiento")
}


//Operador Terniario

const Respuesta = saldo1 > saldo2 ? "Pagar" : "Seguir consumiendo"
console.log(Respuesta)


//Bucles

const tareas = ["trabajar", "Comer", "Dormir"]
const usuario = {
    nombre: "Joe",
    skills: true
}

//Funcion callback
tareas.forEach((t,i) => console.log(t,i)) 

for (const t of tareas){
    console.log(t)
}

for(const clave in usuario){
    console.log(`${usuario[clave]}`)
}

const nuevasTareas = tareas.map(t => t.toUpperCase())
console.log(nuevasTareas)


//Funciones
function declarada(){
    console.log("Funcion declarada")
}
declarada()

const expresada = function(){
    console.log("Funcion expresada")
}
expresada()


//Funcion anonima y autoejecutada
console.log(  
    function(){
        return "hola"
    }()
)

//Parametros
function hello(dato1, dato2){ 
    console.log(dato1 + " " + dato2)
}

//Argumentos
hello("Js", "React") 

const precioFinal = function(a, b, ...args){
    console.log(args)
}

precioFinal(10, 20, 30, 50, 60)

function hello(){
    return "Hola JS"
}

console.log(hello())

function login(user, password){
    console.log("Usuario y password")
}

const validar = (user, password) =>{
    console.log("Usuario y password")
}











