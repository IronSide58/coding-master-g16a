function soycien() { return 100; }
function soydocientos() { return 200; }

function sumaDosFunciones(unaFuncion, otraFuncion) {
    const suma = unaFuncion() + otraFuncion();
    return suma;
}

console.log(sumaDosFunciones(soycien,soydocientos));