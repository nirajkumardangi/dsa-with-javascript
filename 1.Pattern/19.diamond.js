/* 
Diamond
   *
  ***
 *****
*******
 *****
  ***
   *

*/

function diamond(n) {
  // Upper part
  for (let i = 0; i < n; i++) {
    let row = "";

    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    // stars
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }

  // Lower part
  for (let i = n - 2; i >= 0; i--) {
    let row = "";

    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    // stars
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

diamond(4);
