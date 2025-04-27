// 1. if, else if, else Statements
let x = 10;

if (x > 20) {
  console.log("Greater than 20");
} else if (x > 5) {
  console.log("Between 6 and 20");
} else {
  console.log("5 or less");
}


// 2. switch Statement: Useful when you have multiple conditions based on the same variable.
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red");
    break;
  case "banana":
    console.log("Bananas are yellow");
    break;
  default:
    console.log("Unknown fruit");
}
// 🧠 Always include a break to prevent fall-through (unless intentional).


// 3. Nested Conditions: Nested if statements allow complex decisions.
let score = 85;

if (score > 50) {
  if (score > 80) {
    console.log("Grade A");
  } else {
    console.log("Grade B");
  }
} else {
  console.log("Fail");
}


// 4. Ternary Operator (Shorthand)
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult

// Q1. Determine if a number is positive, negative, or zero
function checkNumber(n) {
  if(n > 0) console.log("positive");
  else if(n == 0) console.log("zero");
  else console.log('negative');
}

checkNumber(3); // positive
checkNumber(-3); // negative
checkNumber(0); // zero


// Q2. Create a grading system using if...else
// 90+ = A, 80+ = B, 70+ = C, else = Fail
function checkGrade(totalPercentage) {
  switch (true) {
    case totalPercentage > 90:
      console.log('Grade A');
      break;
    case totalPercentage > 80:
      console.log('Grade B');
      break;
    case totalPercentage > 70:
      console.log('Grade C');
      break;
    default:
      console.log('Fail');
  }
}

checkGrade(81);



/* Using if, else-if, else
function checkGrade(totalPercentage) {
  if (totalPercentage > 90) {
    console.log('Grade A');
  } else if (totalPercentage > 80) {
    console.log('Grade B');
  } else if (totalPercentage > 70) {
    console.log('Grade C');
  } else {
    console.log('Fail');
  }
}

checkGrade(76); // Output: Grade C
*/



// Q3. Create a mini calculator using switch
function calculate(a, b, operator) {
  // operator: '+', '-', '*', '/'
}