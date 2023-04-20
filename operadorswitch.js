let numero =3;

let numeroTexto = "Valor desconocido";

switch ( numero ){
    case 1: 
        numeroTexto = "Numnero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro";
        break;
    default:
        numeroTexto = "Caso no entiende";
        break;
}

console.log(numeroTexto);

// Ejemplo WHILE
/*
let contador = 0;

while( contador <= 3 ){
    console.log(contador);
    contador++;
}

do {
    console.log(contador);
    contador++;
}while(contador <= 3);


console.log("Fin del ciclo");
*/
// Ciclo for

for (let contador = 0; contador < 3 ; contador ++ ){
    console.log(contador);
}
console.log("Fin del ciclo")

for (let contador = 0; contador <= 10; contador++ ){
    if( contador % 2 == 0){
        console.log(contador);
        //break;// Si le agrego un break corta el ciclo for
    }
}
console.log("Fin del ciclo for");

inicio:

for (let contador = 0; contador <=10; contador++ ){
    if (contador% 2 !== 0){
         continue inicio;// ir a la siguiente iteracion
    }
    console.log(contador);
}
