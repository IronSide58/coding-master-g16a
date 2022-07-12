"use strict";
//Método reduce
const numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce((a, b) => a + b);

console.log(suma);

const arregloNumeros = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

let sumaID = arregloNumeros.reduce((a, b) => {
    return a + b.id;
}, 0);

console.log(sumaID);