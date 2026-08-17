/* 

Right Triangle
      * 
    * * 
  * * * 
* * * * 
 
 */

function rightTriangle(n) {
  for (let i = 0; i < n; i++) {
    row = "";
    for (let j = 1; j < n - i; j++) {
      row += "  ";
    }

    for (let k = 0; k <= i; k++) {
      row += "* ";
    }

    console.log(row);
  }
}

rightTriangle(8);
