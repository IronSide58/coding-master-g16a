class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(root = null){
        this.root = root;
    }
    insert(data) {
        let node = new Node(data);
        if (this.root !== null) {
            let current = this.root;
            //Recorrido del Arbol
            while(true) {
                if(current.right != null && current.data < node.data) {
                    current = current.right
                } else if (current.left != null && current.data > node.data) {
                    current = current.left
                } else {
                    break
                }
            }
            //Asignamos el nodo según el current
            if (current.data > data) {
                current.left = node;
            } else {
                current.right = node;
            }
        } else {
            this.root = node;
        }
    }
}

let treeBinary = new BinaryTree();