// JavaScript has two main categories of data types:
// 1. Primitive (copied by value):	(Number, String, Boolean, null, undefined, Symbol, BigInt).
// 2. Reference (copied by reference):	(Object, Array, Function, Date, Map, etc).


/* 1. Primitive Types: Primitive values are immutable and stored by value in memory.
  - Copied by value
  - Stored directly in the stack
  - Immutable (can't change the actual value)
*/

let a = 10;       // Number
let b = "Hello";  // String
let c = true;     // Boolean
let d = null;
let e = undefined;
let f = Symbol("id");


// Copying Primitive Values
let x = 5;
let y = x;
y = 10;

console.log(x); // 5
console.log(y); // 10