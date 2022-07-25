"use strict";

let x = 10;

//Definir promesas
const promise = new Promise((resolve, reject) => {
    x === 10 
        ? resolve("La promesa se cumplio, x === 10") 
        : reject("La promesa no se cumplio, x !== 10");
});

//Manejar la respuesta de la promisa
promise
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });