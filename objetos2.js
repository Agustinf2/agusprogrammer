// CONSTRUCTOR DE OBJEOS DE TIPO PERSONA
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}












Persona.prototype.tel = "3364529381";

let padre = new Persona("Agustin", "Lopez", "juangmail.com");

console.log( padre.nombreCompleto() );

let madre = new Persona("Sandra", "Lopez", "juanagmail.com");
console.log( padre.tel );

padre.nombre = "Lolo";









let miObjeto = new Object();
let miObjeto2 = {};

let cadena = new String("Hola");
let cadena2 = "Hola";

let numero1 = new Number(1);
let numero2 = 1;

let miboolean = new Boolean(false);
let miBoolean = false;

let arreglo  = new Array();
let arreglo1 = [];

let funcion = new Function();
let funcion1 = function(){};