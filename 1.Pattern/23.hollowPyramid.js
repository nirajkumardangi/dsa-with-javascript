/* 
Hollow Pyramid
   *
  * *
 *   *
*******

*/

function hollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // leading space
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // pyramid
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === n || k === 1 || k === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

hollowPyramid(8);
