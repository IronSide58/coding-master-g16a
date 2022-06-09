class Stack{
    constructor(){
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length-1];
    }
    size() {
        return this.items.length;
    }
    print() {
        return this.items;
    }
}

//let pila = new stack();

//Ejercicio 1
let stack = new Stack(); 

stack.push('Manzana')
stack.push('Cebolla')
stack.push('Apio')
stack.push('Naranja')
stack.push('Papaya')
stack.push('Sandía')
stack.push('Melón')

function ret_elementos(stack,n) {
    let auxiliar = new Stack();
    let item;
    for(let i = 0;i < n;i++) {
        item = stack.pop();
        auxiliar.push(item);
    }
    auxiliar.print();
}

//Ejercicio 2
let stack_numbers = new Stack()
stack_numbers.push(3)
stack_numbers.push(2)
stack_numbers.push(3)
stack_numbers.push(4)
stack_numbers.push(6)
stack_numbers.push(8)
stack_numbers.push(1)
stack_numbers.push(2)
stack_numbers.push(5)
stack_numbers.push(5)

function reemplazar(stack, nuevo_n, viejo_n) {
    let num = stack.size();
    let item;
    for(let i = 0;i < num;i ++){
        item = stack.pop();
        if(item === viejo_n){
            stack.push(nuevo_n);
            return stack.print()
        }
    }
}

//Ejercicio 3
let stack_address = new Stack();

stack_address.push("Pueblo Origen");
stack_address.push("Pueblo 1");
stack_address.push("Pueblo 2");
stack_address.push("Destino");

function caminoRecorrido(stack) {
    console.log(`Recorrido: ${stack.print()}`);
    console.log(`Regreso: ${stack.print().reverse()}`);
}

//Ejercicio 4
let stack_contents = new Stack();
stack_contents.push(3)
stack_contents.push(2)
stack_contents.push(3)
stack_contents.push(4)
stack_contents.push(6)
stack_contents.push(8)
stack_contents.push(1)
stack_contents.push(2)
stack_contents.push(5)
stack_contents.push(5)

function retirarContenedorPos(stack, pos) {
    let stack_aux = new Stack();
    let item;
    stack.print().reverse();
    for (let i = 0; i <= pos; i++) {
        if (i === pos) {
            stack.pop();
        } else {
            item = stack.pop();
            stack_aux.push(item);
        }
    }
    let num = stack_aux.size();
    for (let i = 0; i < num; i++) {
        item = stack_aux.pop();
        stack.push(item);
    }
    return stack.print().reverse();
}

//Ejercicio 5
let stack_content = new Stack();
stack_content.push(1)
stack_content.push(2)
stack_content.push(3)
stack_content.push(4)
stack_content.push(5)
stack_content.push(6)
stack_content.push(7)
stack_content.push(8)
stack_content.push(9)

function retirarContenedorId(stack, id) {
    let stack_aux = new Stack();
    let item;
    let tamano = stack.size();
    for (let i = 0; i < tamano; i++) {
        item = stack.pop();
        if (item === id) {
            let num = stack_aux.size();
            for (let i = 0; i < num; i++) {
                item = stack_aux.pop();
                stack.push(item);
            }
            return stack.print();
        } else {
            stack_aux.push(item);
        }
    }
}