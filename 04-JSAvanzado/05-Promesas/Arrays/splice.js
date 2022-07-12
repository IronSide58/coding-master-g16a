"use strict";

/*Método splice -> Nos permite eliminar posiciones en un arreglo o reemplazar un valor.
    Sintaxis :
        array.splice(a, b, c);
            a = Indica desde que posición del arreglo comenzara a eliminar.
            b = Indica cuantas posiciones eliminara a partir de la posición seleccionada
            c = Indicamos el valor que sustituira al otro valor
*/
let datos = ["a", "b", "c", "d", "f"];
let eliminado = datos.splice(2, 2);

console.log(eliminado);

let palabras = ["Carro", "Casa", "Avion", "Bicicleta", "Pasto"];
let palabrasEliminadas = palabras.splice(6, 2, "Tren", "Motocicleta");

console.log(`${palabrasEliminadas} el nuevo arreglo es: ${palabras}`);

/* Método replace -> Nos permite reemplazar cierto valor en una palabra*/
const palabra = "Hola como estas";

console.log(palabra.replace("Hola", "Wuenas"))