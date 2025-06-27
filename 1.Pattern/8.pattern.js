/**
 * Question No8. Print This Pattern
 *
 *    *
 *    * *
 *    * * *
 *    * * * *
 *    * * * * *
 *    * * * *
 *    * * *
 *    * *
 *    *
 *
 */

// Loop through each row, from 1 to n * 2
function pattern8(n) {
  // Loop through (2n - 1) rows to form the full pattern
  for (let row = 1; row < n * 2; row++) {
    // Determine number of stars in this row
    let totalColsInRow = row > n ? 2 * n - row : row;

    let str = '';
    // Add stars to the row
    for (let col = 1; col <= totalColsInRow; col++) {
      str += '* ';
    }

    // Print the row
    console.log(str);
  }
}

pattern8(5);
