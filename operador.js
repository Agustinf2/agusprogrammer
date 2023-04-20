let numero = 3;

if (numero == 1){
    console.log("NUmero uno ");
}
else if(numero ==2){
    console.log("Numero dos ");
}
else if (numero ==3){
    console.log("Numero tres");
}
else if (numero == 4){
    console.log("Numero cuatro");
}
else {
    console.log("Numero desconocido")
}

//Ejemplo de estacion

let mes = 4;
let estacion;

if ( mes == 1 || mes == 2 || mes ==12){
    estacion = "Invierno";
}
else if (mes == 3 || mes == 4 || mes ==5){
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}
else if ( mes == 9 || mes == 10 || mes == 11){

    estacion = "Otoño";
}
else{
    console.log("Valor incorrecto ");
}

console.log(estacion);

// Ejemplo 

let horaDia = 0;
let mensaje ;

if( horaDia >= 6 && horaDia <= 11){
    mensaje ="Buenos dias";
}
else if (horaDia >=12 && horaDia <= 18){
    mensaje = "Buenas tardes";
}
else if (horaDia >= 19 && horaDia <= 24 ){
    mensaje = "Buenas Noches";
}
else if (horaDia >= 0 && horaDia < 6 ){
    mensaje = "Estoy durmiendo";
}
else {
    mensaje = "Valor incorrecto";
}

console.log(mensaje);