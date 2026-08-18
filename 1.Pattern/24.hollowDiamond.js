/* 
Hollow Diamond
   *
  * *
 *   *
*     *
 *   *
  * *
   *

*/


function hollowDiamond(n) {
  // Upper part
  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // stars and inner spaces
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }

  // Lower part
  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // stars and inner spaces
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

hollowDiamond(8);