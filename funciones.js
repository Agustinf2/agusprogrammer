 function miFuncion(a,b){
    return a + b;
 } 

 //Llamado a la funcion
let resultado =  miFuncion(2,3);

 console.log(resultado) ;

 // Declaracion Funcion de tipo Expresion
 let x = function (a, b){return a + b};
 resultado = x(1, 2);
 console.log(resultado);

 const sumarFuncionTipoFlecha = (a, b) => a + b;
 resultado = sumarFuncionTipoFlecha(3,5);
 console.log (resultado);
 

 let sumar = function (a , b ){
    console.log( arguments[0]);
    console.log( arguments[1]);
    return a + b
 };

 resultado = sumar(3 , 6);
 console.log(resultado);


 let resultado1 = sumarTodo (5, 6, 13 , 10, 9);
console.log( resultado1 );
 function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
 }
 
