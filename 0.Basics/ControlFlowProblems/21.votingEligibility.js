function votingEligibility(age) {
  // Check if the input is a valid number and within a realistic range
  if (isNaN(age) || age < 0 || age > 100) {
    return 'Enter valid age range';
  }

  // Check if the age is 18 or greater (eligible to vote)
  if (age >= 18) {
    return 'You are eligible for voting';
  } else {
    return 'You are not eligible for voting';
  }
}

console.log(votingEligibility(0)); // You are not eligible for voting
console.log(votingEligibility(10)); // You are not eligible for voting
console.log(votingEligibility(20)); // You are eligible for voting
console.log(votingEligibility(150)); // Enter valid age range
console.log(votingEligibility('3k')); // Enter valid age range
