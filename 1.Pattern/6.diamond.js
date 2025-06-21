function printDiamondPattern(n) {
  // Upper part
  for (let row = 1; row <= n; row++) {
    let line = '';

    // Add spaces
    for (let space = 1; space <= n - row; space++) {
      line += ' ';
    }

    // Add stars
    for (let col = 1; col <= row; col++) {
      line += '* ';
    }

    console.log(line);
  }

  // Lower part
  for (let row = n - 1; row >= 1; row--) {
    let line = '';

    // Add spaces
    for (let space = 1; space <= n - row; space++) {
      line += ' ';
    }

    // Add stars
    for (let col = 1; col <= row; col++) {
      line += '* ';
    }

    console.log(line);
  }
}

printDiamondPattern(5);
