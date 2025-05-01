// Q9. Check if a student passed based on subject scores and average
function isPassed(m1, m2, m3) {
  if (m1 >= 0 && m1 <= 100 && m2 >= 0 && m2 <= 100 && m3 >= 0 && m3 <= 100) {
    let totalScore = m1 + m2 + m3;
    let avg = totalScore / 3;

    if (avg > 33 && m1 >= 33 && m2 >= 33 && m3 >= 33) {
      return 'Pass';
    } else {
      return 'Fail!';
    }
  } else {
    return 'Invalid input';
  }
}

console.log(isPassed(54, 80, 34)); // Pass
console.log(isPassed(38, 89, 30)); // Fail!
console.log(isPassed(90, 122, 34)); // Invalid input
