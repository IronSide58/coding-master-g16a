let fruit = ['Fresa', 'Manzana', 'Naranja', 'Platano', 'Durazno'];

//Eliminar elementos del array
fruit.splice(2,1);

console.log(fruit);

//Eliminar x y reemplazar
fruit.splice(1,1,'Pera');
console.log(fruit);

//Eliminar el ultimo elemento de un array
console.log(fruit.pop());

//Eliminar el primer elemento de un array
console.log(fruit.shift());