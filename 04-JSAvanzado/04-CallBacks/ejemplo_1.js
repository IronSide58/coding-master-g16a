const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;

const calculadora = (a, b, operacion) => operacion(a , b);

console.log(calculadora(5, 8, suma));
console.log(calculadora(10, 7, resta));
console.log(calculadora(4, 5, multiplicacion));
console.log(calculadora(10, 2, division));