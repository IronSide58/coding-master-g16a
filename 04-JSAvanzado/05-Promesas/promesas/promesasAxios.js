"use strict";

const axios = require("axios"); /** Hacemos la peticion a la dependencia **/
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

axios
    .get(url).then((response) => {
        console.log('Response: ', response.data);
    }).catch((error) => {
        console.log('Error: ', error.response.data);
    }); 