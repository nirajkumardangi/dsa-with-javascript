// Q10. Calculate simple or compound interest using switch
function interestCalculator(type, principal, rate, time) {
  if (principal <= 0 || rate <= 0 || time <= 0) {
    return 'Invalid input';
  }

  let amount, interest;

  switch (type.toLowerCase()) {
    case 'simple':
      interest = (principal * rate * time) / 100;
      amount = principal + interest;
      break;

    case 'compound':
      amount = principal * Math.pow(1 + rate / 100, time);
      interest = amount - principal;
      break;

    default:
      return 'Invalid interest type';
  }

  return {
    interest: +interest.toFixed(2),
    totalAmount: +amount.toFixed(2),
  };
}

// Example usage:
console.log(interestCalculator('simple', 1000, 5, 2)); // { interest: 100, totalAmount: 1100 }
console.log(interestCalculator('compound', 1000, 5, 2)); // { interest: 102.5, totalAmount: 1102.5 }
