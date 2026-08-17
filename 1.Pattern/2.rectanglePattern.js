/**
 
Rectangle Pattern (4 × 6)
* * * * * *
* * * * * *
* * * * * *
* * * * * *

 */

function rectange(n) {
  for (let i = 0; i < n - 2; i++) {
    row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

rectange(6);
