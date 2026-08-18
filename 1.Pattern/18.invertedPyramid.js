/* 
Inverted Pyramid
*******
 *****
  ***
   *

*/

function invertedPyramid(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    // leading spaces
    for (let j = 0; j < i; j++) {
      row += " ";
    }

    // stars
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

invertedPyramid(4);
