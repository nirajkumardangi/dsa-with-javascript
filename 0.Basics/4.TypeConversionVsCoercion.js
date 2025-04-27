// Type Conversion:	You manually convert a value from one type to another.
// Type Coercion: 	JavaScript automatically converts data types when needed.


// 1. Type Conversion (Explicit Conversion)

// String Conversion
String(123);        // "123"
(123).toString();   // "123"

// Number Conversion
Number("123");      // 123
parseInt("123");    // 123
parseFloat("123.45")// 123.45

// Boolean Conversion
Boolean(0);         // false
Boolean("hello");   // true
Boolean("");        // false


// 2. Type Coercion (Implicit Conversion)

// String Coercion (in + operation)
"5" + 1     // "51"  → number is coerced to string
"5" + true  // "5true"

// Number Coercion (in other operations)
"5" - 1     // 4  → string coerced to number
"5" * 2     // 10
"5" / "2"   // 2.5

// Boolean Coercion
!!"hello"   // true
!!0         // false
!!1         // true
"5" == 5    // true (loose equality does coercion)
"5" === 5    // false (loose equality does coercion)


// 3. Weird / Tricky Examples
null == undefined      // true
null === undefined     // false

false == 0             // true
false === 0            // false

// [] == false            // true
// [] === false           // false

"" == 0                // true
"" === 0               // false

//  Use === to avoid unintended coercion in conditionals and comparisons.

console.log(1 === '1');
