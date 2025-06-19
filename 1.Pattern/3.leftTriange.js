/**
 * Left Angle Triangle Star Pattern - for n = 5
 *
 *            *
 *          * *
 *        * * *
 *      * * * *
 *    * * * * *
 */

function leftTriangle(n) {
  for (let row = 1; row <= n; row++) {
    let line = '';

    // Add spaces (2 spaces per unit for alignment)
    for (let space = 1; space <= n - row; space++) {
      line += '  ';
    }

    // Add stars with a space before each one
    for (let star = 1; star <= row; star++) {
      line += ' *';
    }

    console.log(line);
  }
}

leftTriangle(5);
