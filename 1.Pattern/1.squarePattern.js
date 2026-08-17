/**

Square Pattern
* * * *
* * * *
* * * *
* * * *

 */

function square(n) {
  for (let i = 0; i < n; i++) {
    row = "";
    for (j = 0; j < n; j++) {
      row += "* "
    }
    console.log(row);
  }
}

square(10);

