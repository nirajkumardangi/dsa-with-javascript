/**
 *   Pyramid Star Pattern - for n = 5
 *
 *            *
 *          * * *
 *        * * * * *
 *      * * * * * * *
 *    * * * * * * * * *
 */

function pyramid(n) {
  for (let row = 1; row <= n; row++) {
    let str = '';

    // Add spaces
    for (let space = 1; space <= n - row; space++) {
      str += '  ';
    }

    // Add stars with a space before each one
    for (let col = 1; col <= 2 * row - 1; col++) {
      str += ' *';
    }

    console.log(str);
  }
}

pyramid(5);
