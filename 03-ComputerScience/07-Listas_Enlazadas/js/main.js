class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    insert(data) {
        let node = new Node(data);
        if (this.head !== null) {
            // this.head.next = node;
            let current = this.head
            while (current.next !== null) {
                current = current.next;
            }
            current.next = null;
        } else {
            this.head = node;
        }
    }
    delete(data) {
        if (this.head !== null) {
            // this.head.next = node;
            let current = this.head
            while (current.next !== null) {
                current = current.next;
                if (current.next.data === data) {
                    current.next = current.next.next;
                }
            }
        }
    }
    print() {

    }
    find() {

    }
}

let list = new LinkedList();