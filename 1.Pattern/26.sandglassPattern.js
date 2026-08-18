/* 
Sandglass Pattern
*******
 *****
  ***
   *
  ***
 *****
*******

*/

function sandglass(n) {
  // Upper part
  for (let i = n; i >= 1; i--) {
    let row = "";

    // leading spaces
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }

    // stars
    for (let k = 0; k < 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }

  // Lower part
  for (let i = 2; i <= n; i++) {
    let row = "";

    // leading spaces
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }

    // stars
    for (let k = 0; k < 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

sandglass(4);
