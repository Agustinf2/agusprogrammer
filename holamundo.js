// tipo de dato string
var nombre = "juan";

 console.log( typeof nombre);

var numero = 100;
console.log (typeof numero);

var objeto = {
    nombre : "juan" ,
    apellido : "Perez",
    telefono : "33434433"
}
console.log (objeto);


//  tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);

//tipo de dato function

function miFuncion (){}
console.log (miFuncion);

//tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);


//ARREGLOS 

var autos = ["BMW"];
console.log(autos);

//concatenacion de valores 
var nombre = "Jaun";
var apellido = "Perez";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// let y constant
let noombre;
nombre = "Juan";
console.log(nombre); 

const apelliido = "Perez";
console.log(apelliido);

// BUENAS PRACTICAS 
let nombreCompleto1 = "Juan Perez";
console.log(nombreCompleto1)

let x, y;
x = 10, y= 20;
let z = x + y;
console.log(z);


// operador if 

let a = 10;

if( a % 2 == 0){
    console.log("Es un numero par");
}
else{
    console.log("Es un numero impar");
}

//otro ejemplo 
let edad = 20, adulto = 18;

if( edad >= adulto ){
    console.log ("Es un adullto");
}
else{
    console.log("Es menor de edad");
}

// Ejemplo operador ||
let vacaciones = false, diadescanso = true;
if( vacaciones || diadescanso ){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre esta ocupado");
}

// OTRO EJEMPLO
let miNumero = 18
let edad1 = Number(miNumero);
if (edad1 >= 18){
    console.log("Puede votar");
}
else{
    console.log("Muy joven para votar");
}

let resultado =(edad1 >= 18)? "Puede votar" : "Muy joven para votar";
console.log( resultado);