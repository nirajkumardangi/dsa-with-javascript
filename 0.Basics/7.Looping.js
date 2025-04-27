/* 1. Loops: Loops let you repeat a block of code multiple times — perfect for tasks like:
 - Iterating arrays
 - Repeating calculations
 - Running until a condition is met
*/



// 2. for Loop
/* Syntax:
for (initialization; condition; update) {
  // code block
}
*/

// Example:

for (let i = 0; i < 5; i++) {
  console.log(i);
}



// 3. while Loop

/* Syntax:
while (condition) {
  // code block
}
*/

// Example:

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// ✅ Use when you don’t know beforehand how many times the loop should run.




// 4. do...while Loop

/* Syntax:
do {
  // code block
} while (condition);
*/

Example:

let j = 0;
do {
  console.log(i);
  j++;
} while (j < 5);

// ✅ Guarantees the loop runs at least once, even if the condition is false initially.




// 5. break & continue
// break: exits the loop
// continue: skips the current iteration

for (let i = 0; i < 10; i++) {
  if (i === 7) break;
  if (i % 2 === 0) continue;
  console.log(i); // skips even numbers
}