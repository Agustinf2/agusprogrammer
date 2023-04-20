let persona = {
    nombre: "Agustin",
    apellido: "Faucetta",
    email: "agusfaugmail.com",
    edad: 24,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang ( lang ){
        this.idioma = lang.toUpperCase();
    },
    // Metodo get
    get nombreCompleto(){
    return this.nombre + " " + this.apellido;
}
    /*nombreCompleto: function(){
        return  this.nombre + " " + this.apellido;
    }*/
}
// Formas de acceder a los datos del objeto como en c#
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad)
console.log(persona.nombreCompleto)
console.log(persona.lang)

persona.lang = "en" ;
console.log(persona.lang)
// O tra forma de declarar un objeto
let persona1 = new Object();
persona1.nombre = "Renzo";
persona1.apellido = "Distilio";
persona1.edad = 24;

// Otra forma de acceder a las propiedades de un objeto

console.log(persona1["apellido"]);

//RECORRER CADA UNA DE LAS PROPIEDADES DE UN IBJETO (FOR IN)
for(propiedad in persona){
    console.log( propiedad );
    console.log(persona[propiedad]);
}

// para agregar una propiedad es sencillo 

persona.tel = "3364529381";

console.log(persona);

// para eliminar una propiedad se pone

delete persona.tel;

console.log(persona);

//concatenar propiedades
console.log( persona.nombre + " " + persona.apellido);


let personaString = JSON.stringify( persona );
console.log ( personaString );

