class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;

        return this;
    }

    size() {
        return this.length;
    }

    getNodeByIndex(index) {
        if (this.head == null || index > this.length) return null;

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    at(index) {
        let node = this.getNodeByIndex(index);

        return (node == null) ? null : node.data;
    }

    getNodeByData(node) {
        let temp = this.head;
        for (let i = 0; i < this.length; i++) {
            if (temp.data == node.data) return temp;
            temp = temp.next;
        }

        return null;
    }

    findNode(data) {
        let node = new Node(data);
        let findNode = this.getNodeByData(node);

        return (findNode == null) ? null : findNode;
    }

    toArray() {
        let arr = [];

        for (let i = 0; i < this.length; i++) {
            arr.push(this.head.data);
            this.head = this.head.next;
        }

        return arr;
    }

    removeAt(index) {
        if (this.head == this.tail && index == 0) {
            this.head = null;
            this.tail = null;
        }
        else {
            if (index == 0) {
                this.head = this.head.next;
                this.head.prev = null;
            }
            else if (index == this.length - 1) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            else {
                let temp = this.head;
                for (let i = 0; i < index; i++) {
                    temp = temp.next;
                }
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;
            }
        }

        this.length--;

        return this;
    }

    getIndexOfNode(node) {
        let temp = this.head;

        for (let i = 0; i < this.length; i++) {
            if (temp.data == node.data) return i;
            temp = temp.next;
        }

        return null;
    }

    moveToFront(node) {
        if (this.length == 1) {
            this.head = node;
            this.tail = node;
        }
        else {
            let index = this.getIndexOfNode(node);
            if (index == null) return false;
            this.removeAt(index);
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }

        return this;
    }

    reorganize(data) {
        if (!this.head) return null;

        let node = new Node(data);

        this.moveToFront(node);

        return (this.getIndexOfNode(node) != null);
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
