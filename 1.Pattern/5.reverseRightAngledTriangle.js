/**
 *    Reverse Right-Angled Triangle Star Pattern - for n = 5
 *
 *    * * * * *
 *    * * * *
 *    * * *
 *    * *
 *    *
 *
 */

function reverseRightAngleTriangle(n) {
  for (let row = 1; row <= n; row++) {
    let str = '';
    for (let col = 1; col <= n - row + 1; col++) {
      str += '* ';
    }
    console.log(str);
  }
}

reverseRightAngleTriangle(5);
