const hola = (nombre, callback) => {
    setTimeout(() => {
        return callback(nombre);
    }, 1500);
}

const talk = (mensaje, callback) => {
    setTimeout(() => {
        return callback(mensaje);
    }, 1100);
}

const adios = (nombre, callback) => {
    setTimeout(() => {
        return callback(nombre);
    }, 1000);
}

hola("Abi", (nombre) => {
    console.log('Hola ' +  nombre);
    return talk('Buenas ¿Como estas?', (mensaje) => {
        console.log(mensaje);
        return adios('Abi', (nombre) => {
            return console.log('Adios ' + nombre);
        })
    })
});
//adios("Abi")