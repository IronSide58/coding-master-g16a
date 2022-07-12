"use strict"; //Se utiliza para verificar la validacion de sintaxis
const numeros = [1, 5, 4, 2, 3];

console.log(numeros.indexOf(3));

function encontrarValor(numero) {
    /*Operado ternario
        ? si la condicion se cumple
        : si la condicion no se cumple
    */
    return numeros.indexOf(numero) > 0 
        ? "Valor encontrado"
        : "El valor no esta en el array";
}

console.log(encontrarValor(5));

const arregloNumeros = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
