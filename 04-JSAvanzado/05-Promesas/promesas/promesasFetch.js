"use strict";

const url1 = "https://rickandmortyapi.com/api/character/3";
const url2 = "https://pokeapi.co/api/v2/pokemon/pikachu";
// request => peticion
// response => respuesta
// Cuando una funcion no tiene un return retorna por defecto un undefined

function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

const apiRickMorty = getData(url1);
apiRickMorty
    .then((response) => {
        console.log("response ", response);
    })
    .catch((error) => {
        console.log("error ", error);
    });

const pokemons = getData(url2);
pokemons
    .then((response) => {
        console.log("response ", response);
    })
    .catch((error) => {
        console.log("error ", error);
    });

// Para lanzar varias promesas en una se usa Promise.all
// const pokemons = getData(url2);
// const apiRickMorty = getData(url1);
// const arreglo = [apiRickMorty, pokemons];
// Promise.all(arreglo).then((arr) => {
//   console.log(arr);
// })
