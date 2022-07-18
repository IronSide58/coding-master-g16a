'use strict';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
let data;

const promesa = new Promise((resolve, reject) => {
    fetch(url)
        .then((response) => response.json())
        .then((response => {
            resolve(response)
        }))
        .catch((error) => {
            reject(error)
        })
});

promesa.then((response) => {
    let name = document.getElementById('name');
    name.innerHTML = `El nombre del pokemon es: ${response.name.toUpperCase()}`;
    console.log(response);
}).catch((error) => {
    console.log(`Hubo un error ${error}`)
})