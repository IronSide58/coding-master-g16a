const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    setTimeout(() => {
        number > 3 
            ? resolve(number)
            : reject("El número es menor a 3")
    }, 1000);
});

function suma(num1, num2) {
    return num1 + num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
promise.
promise.then((number) => {
    console.log(`El numero inicial ${number}`);
    return suma(number, 5);
}).then((valorSumado) => {
    console.log(``);
    return multiplicacion(valorSumado, 10);
}).then((valorMultiplicado) => {
    console.log(`Nuestro valor es: ${valorMultiplicado}`);
}).catch((error) => {
    console.log(error);
});