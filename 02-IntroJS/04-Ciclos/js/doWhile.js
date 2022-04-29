// Ejemplo DoWhile
var fullName = prompt('Ingresa tu nombre compreto');
var letterSearch = prompt('Ingresa la letra que quieres buscar');
var i = 0;
var letraActual;
var flag = 0;
var msg;

do {
    letraActual = fullName.substring(i, i+1);
    if (letterSearch.toLowerCase() === letraActual.toLowerCase()) {
        flag = 1;
    }
    i++;
} while (flag === 0 && i <= fullName.length );

if (flag === 1) {
    msg = `${fullName} encontramos la letra ${letterSearch} en la posición ${i}`;
} else {
    msg = `Lo sentimos no se encontró la letra ${letterSearch} en tu nombre.`;
}

document.write(msg)