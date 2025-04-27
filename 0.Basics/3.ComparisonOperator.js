// Comparison: == does type coercion. and === is strict equality (compares type + value).

5 == "5"      // true
5 === "5"     // false

null == undefined  // true
null === undefined // false

let obj = {name: 'john'};
let obj1 = { name: 'john' };

console.log(obj == obj);   // true
console.log(obj === obj);  // true
console.log(obj == obj1);  // false
console.log(obj === obj1); // false