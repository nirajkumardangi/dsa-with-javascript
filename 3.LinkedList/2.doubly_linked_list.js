// Node class for Doubly Linked List
class DoubleNode {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to next node
    this.prev = null; // Pointer to previous node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // First node
    this.tail = null; // Last node
  }
}

// Creating and connecting doubly linked nodes
let node1 = new DoubleNode(10);
let node2 = new DoubleNode(20);
let node3 = new DoubleNode(30);

// Forward connections
node1.next = node2;
node2.next = node3;

// Backward connections
node2.prev = node1;
node3.prev = node2;

// Now we can traverse both ways!
console.log(node2.next.data); // 30 (Forward)
console.log(node2.prev.data); // 20 (Backward)
