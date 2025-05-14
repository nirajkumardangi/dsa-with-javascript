// Q16. Print a pyramid pattern of stars (*) using nested for loops
/*
Example (n = 3):
  *
 ***
*****
*/
function starPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';

    // print space
    for (let j = 1; j <= n - i; j++) {
      line += ' ';
    }

    // print star
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += '*';
    }

    console.log(line);
  }
}

starPyramid(5);

// OUTPUT:::
//     *
//    ***
//   *****
//  *******
// *********