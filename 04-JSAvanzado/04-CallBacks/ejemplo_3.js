function hola(nombre, callback) {
    setTimeout(() => {
        return callback(nombre);
    }, 1500);
}
const desafio = (nombre) => console.log(`Hola ${nombre}`);

hola("Abi", desafio)