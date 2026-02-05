// STACK IMPLEMENTATION USING ARRAY

class Stack {
  constructor(capacity) {
    this.items = new Array(capacity); // Fixed-size array
    this.capacity = capacity; // Maximum size
    this.top = -1; // -1 means empty
  }

  // PUSH - Add element to top of stack
  push(element) {
    // Check for overflow
    if (this.isFull()) {
      console.log("Stack Overflow! Cannot push");
      return;
    }

    // Increment top and add element
    this.top++;
    this.items[this.top] = element;
  }

  // POP - Remove and return top element
  pop() {
    // Check for underflow
    if (this.isEmpty()) {
      console.log("Stack Underflow! Cannot pop");
      return;
    }

    // Get element and decrement top
    let poppedElement = this.items[this.top];
    this.items[this.top] = undefined;
    this.top--;

    console.log("Popped: ", poppedElement);
  }

  // isEmpty -  Check if stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // isFull - Check if stack is full (for fixed-size)
  isFull() {
    return this.top === this.capacity - 1;
  }

  // size - Return number of elements
  size() {
    return this.top + 1;
  }

  // print - Display stack contents
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }

    console.log(this.items);
  }
}

// OUTPUT:::

const newStack = new Stack(5);

newStack.push(10);
newStack.push(20);
newStack.push(30);
newStack.push(40);

newStack.print();
newStack.pop()
newStack.print()

