/**
 * Right Angle Triangle Star Pattern
 * for n = 5
 * 
 *    *
 *    * *
 *    * * *
 *    * * * *
 *    * * * * *
 */

function trianglePattern(n) {
  for (let row = 1; row <= n; row++) {
    let star = '';

    for (let col = 1; col <= row; col++) {
      star += '* ';
    }

    console.log(star);
  }
}

trianglePattern(5);
