class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    size() {
        return this.items.length;
    }
    print() {
        return this.items;
    }
}

/*Ejercicio 1. Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra */
let queue_color = new Queue();
queue_color.enqueue('amarillo')
queue_color.enqueue('rosa')
queue_color.enqueue('rojo')
queue_color.enqueue('verde')
queue_color.enqueue('azul')
queue_color.enqueue('negro')
queue_color.enqueue('morado')
queue_color.enqueue('blanco')

function separarQueues(queue) {
    let queue_par = new Queue();
    let queue_impar = new Queue();
    var size = queue.size()
    for (let i = 0; i < size; i++) {
        if (i %2 == 0) {
            queue_par.enqueue(queue.dequeue());
        } else {
            queue_impar.enqueue(queue.dequeue());
        }
    }
    return 'Cola 1:' + queue_par.print() + ' Cola 2:' + queue_impar.print();
}

/*Ejercicio 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final. */
let queue_tickets = new Queue();
queue_tickets.enqueue({user: 'User 1', ticket: true})
queue_tickets.enqueue({user: 'User 2', ticket: true})
queue_tickets.enqueue({user: 'User 3', ticket: false})
queue_tickets.enqueue({user: 'User 4', ticket: true})
queue_tickets.enqueue({user: 'User 5', ticket: false})
queue_tickets.enqueue({user: 'User 6', ticket: false})
queue_tickets.enqueue({user: 'User 7', ticket: true})
queue_tickets.enqueue({user: 'User 8', ticket: true})
queue_tickets.enqueue({user: 'User 9', ticket: true})
queue_tickets.enqueue({user: 'User 10', ticket: false})
queue_tickets.enqueue({user: 'User 11', ticket: true})

function sinColados(queue) {
    var size = queue.size();
    var item;
    for (let i = 0; i < size; i++) {
        item = queue.dequeue();
        if(item.ticket == true){
            queue.enqueue(item);
        }
    }
    return queue.print();
}