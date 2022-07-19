'use strict';

const url = 'http://localhost:3000';

fetch(url).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log('Error', error);
})