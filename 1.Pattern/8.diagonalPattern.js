/* 

Diagonal Pattern
*
  *
    *
      * 

 */

function diagonalPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      if (j === i) {
        row += "*";
      } else {
        row += "  ";
      }
    }

    console.log(row);
  }
}

diagonalPattern(5);
