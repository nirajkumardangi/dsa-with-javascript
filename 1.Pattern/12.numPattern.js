/* 
1
22
333
4444 
*/

function numPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += i;
    }

    console.log(row);
  }
}

numPattern(5);
