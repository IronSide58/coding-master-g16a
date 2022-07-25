"use strict";
let data;
const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then ((response) => response.json())
        .then ((data) => data)
        .catch((error) => console.log('Error: ' + error));
}

const showData = async () => {
    const data = await getData();
    return console.log(data);
}

showData();