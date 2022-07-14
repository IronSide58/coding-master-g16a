"use strict";

const { log } = require("console");

const XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;

let url = "https://pokeapi.co/api/v2/pokemon/ditto";

function getData(url, callback) {
    let xhttp = new XMLHTTPRequest();

    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null ,JSON.parse(xhttp.responseText));
            } else {
                callback('Algo salio mal' ,null);
            }
        }
    };
    xhttp.send();
}

getData(url, (error, data) => {
    console.log(error, data);
});