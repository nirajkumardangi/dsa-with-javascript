/* 
Pascal Triangle
      1
     1 1
    1 2 1
   1 3 3 1

*/

function pascalTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    // leading spaces
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    let num = 1;

    for (let j = 0; j <= i; j++) {
      row += num + " ";

      // next value in row
      num = (num * (i - j)) / (j + 1);
    }

    console.log(row);
  }
}

pascalTriangle(4);
