//Ejemplo while
var fullName = prompt('Ingresa tu nombre completo:');
var letter = prompt('Ingresa la letra que quieres saber cuantas veces aparece en tu nombre:');
var i = 0;
var currelyLetter;
var contador = 0;

while (i <= fullName.length) {
    currelyLetter = fullName.substring(i, i+1);
    if (currelyLetter.toLowerCase() === letter.toLowerCase()) {
        contador ++;
    }
    i++;
}
document.write(`${fullName} la letra 'a' aparece ${contador}`);