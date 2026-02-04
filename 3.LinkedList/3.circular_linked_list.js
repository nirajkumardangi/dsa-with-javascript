// Node class for Circular Singly Linked List
class Node {
  constructor(data) {
    this.data = data; // The actual value
    this.next = null; // Pointer to next node
  }
}

// Circular Singly Linked List
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add to end (makes it circular)
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Points to itself!
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Complete the circle!
    }

    this.size++;
  }

  // Print (be careful - infinite loop possible!)
  print() {
    if (!this.head) return;

    let current = this.head;
    let result = [];

    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head); // Stop when back to head

    console.log(result.join(" → ") + " → (back to head)");
  }
}

let circular = new CircularLinkedList();
circular.append(10);
circular.append(20);
circular.append(30);
circular.print(); // 10 → 20 → 30 → (back to head)
