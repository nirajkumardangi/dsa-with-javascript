/* 
Butterfly Pattern
*      *
**    **
***  ***
********
***  ***
**    **
*      *

*/

function butterflyPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // star
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    // space
    for (let k = 1; k <= 2 * (n - i); k++) {
      row += " ";
    }

    // start
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // star
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    // space
    for (let k = 1; k <= 2 * (n - i); k++) {
      row += " ";
    }

    // start
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

butterflyPattern(4);
