const numeros = [1, 5, 4, 2, 3];

console.log(numeros.sort());
console.log(numeros.sort((a,b)=> b - a));

const arregloNumeros = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

console.log(arregloNumeros.sort((a,b)=> a.id + b.id));
console.log(arregloNumeros.sort((a,b)=> b.id - a.id));