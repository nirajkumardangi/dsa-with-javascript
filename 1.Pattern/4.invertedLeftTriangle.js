/* 

Inverted Left Triangle
* * * *
* * *
* *
*

 */

function invertedLeftTriangle(n) {
  for (let i = 0; i < n; i++) {
    row = "";
    for (let j = n-i; j > 0; j--) {
      row += "* ";
    }
    console.log(row);
  }
}

invertedLeftTriangle(5)