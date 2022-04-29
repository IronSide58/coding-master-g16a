//Ejercicio 1
var number = Number(prompt('Ingresa un numero del cual requieres el numero de pares'));

document.write('Los numeros pares que hay son: <br>');
for(var i=1;i<=number;i++){
    if (i %2 == 0) {
        document.write(i + '<br>');
    }
}