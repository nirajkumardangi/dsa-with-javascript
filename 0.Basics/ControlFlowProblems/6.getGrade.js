// Q6. Grade calculator using switch (A–F)
function getGrade(score) {
  // handle edge case
  if (typeof score !== 'number' || isNaN(score) || score < 0 || score > 100) {
    return 'Invalid Result';
  }

  switch (true) {
    case score >= 90:
      return 'Grade A';
    case score >= 70:
      return 'Grade B';
    case score >= 50:
      return 'Grade C';
    case score >= 40:
      return 'Grade D';
    case score >= 30:
      return 'Grade E';
    default:
      return 'Fail!';
  }
}

console.log(getGrade(99)); // Grade A
console.log(getGrade(30)); // Grade E
console.log(getGrade(10)); // Fail!
