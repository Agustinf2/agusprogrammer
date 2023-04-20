//let autos = new Array ("BMW","Mercedez Benz");

const autos = ["BWM","Mercedez Benz", "Volvo"];
console.log(autos);

console.log(autos[0]);

for (let i = 0; i < autos.length; i++){
    console.log( autos[i]);
}

autos[1] = "Ferrari";
console.log(autos[1]);

 autos.push("Audi");
 console.log(autos);

 console.log(autos.length);

 autos[autos.length] = "Cadillac";

 console.log(autos);


console.log( Array.isArray(autos) );

console.log( autos instanceof Array );