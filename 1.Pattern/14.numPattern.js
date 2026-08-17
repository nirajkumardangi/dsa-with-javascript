/* 
4
43
432
4321 
*/

function numPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = n; j >= n - i + 1; j--) {
      row += j;
    }

    console.log(row);
  }
}

numPattern(5);
