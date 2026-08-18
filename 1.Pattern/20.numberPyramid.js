/* 
Number Pyramid
   1
  121
 12321
1234321

*/

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // increasing
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    // decreasing
    for (let j = i - 1; j >= 1; j--) {
      row += j;
    }

    console.log(row);
  }
}

pyramid(5);
