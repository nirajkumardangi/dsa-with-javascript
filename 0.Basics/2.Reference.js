/* 3. Reference Types: Reference values are stored by reference. The variable holds a pointer to a location in memory.
 - Stored in the heap
 - The variable contains a reference (memory address)
 - Copied by reference
*/

let arr = [1, 2, 3];
let obj = { name: "Alice" };
let func = function() { return "Hi"; };


// Copying Reference Values

let person1 = { name: "John" };
let person2 = person1;

person2.name = "Jane";

console.log(person1.name); // "Jane"
console.log(person2.name); // "Jane"
// 🔍 person1 and person2 refer to the same object in memory.