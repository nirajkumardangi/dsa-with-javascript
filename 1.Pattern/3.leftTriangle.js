/**
 
Left Triangle
*
* *
* * *
* * * *

 */

function leftTriangle(n) {
  for (i = 0; i < n; i++) {
    row = "";
    for (j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

leftTriangle(5)
