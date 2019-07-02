const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      let node = new Node(data);

      if (this._tail == null) {
        this._head = node;
        this._tail = node;
      }
      else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
      }
      this.length++;

      return this;
    }

    head() {
      return (this._head == null) ? null : this._head.data;
    }

    tail() {
      return (this._tail == null) ? null : this._tail.data;
    }

    getNodeByIndex(index) {
      let temp = this._head;

      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }

      return temp;
    }

    at(index) {
      let node = this.getNodeByIndex(index);

      return (node == null) ? null : node.data;
    }

    insertAt(index, data) {
      if (this.length === 0 && index === 0) {
        this.append(data);
      }
      else if (this.length !== 0 && index === 0) {
        let node = new Node(data);
        let currNode = this.getNodeByIndex(index);

        currNode.prev = node;
        node.next = currNode;
        this.length++;
      }
      else {
        let node = new Node(data);
        let currNode = this.getNodeByIndex(index - 1);
        let nextNode = this.getNodeByIndex(index);

        node.prev = currNode;
        node.next = nextNode;
        nextNode.prev = node;
        currNode.next = node;
        this.length++;
      }

      return this;
    }

    isEmpty() {
      return (this.length == 0);
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;

      return this;
    }

    deleteAt(index) {
      let currNode = this.getNodeByIndex(index - 1);
      let nextNode = this.getNodeByIndex(index + 1);

      currNode.next = nextNode;
      if (nextNode != null) nextNode.prev = currNode;
      this.length--;

      return this;
    }

    reverse() {
      let head = this._head;
      let tail = this._tail;

      for (let i = 0; i < this.length / 2; i++) {
        let temp = head.data;
        head.data = tail.data;
        tail.data = temp;
        head = head.next;
        tail = tail.prev;
      }

      return this;
    }

    indexOf(data) {
      let temp = this._head;

      for (let i = 0; i < this.length; i++) {
        if (temp.data == data) return i;
        temp = temp.next;
      }

      return -1;
    }
}

module.exports = LinkedList;
