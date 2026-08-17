/**
 
Inverted Right Triangle
* * * *
  * * *
    * *
      *

 */

function invertedRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "  ";
    }

    for (let k = n; k > i; k--) {
      row += "* ";
    }
    console.log(row);
  }
}

invertedRightTriangle(5);
